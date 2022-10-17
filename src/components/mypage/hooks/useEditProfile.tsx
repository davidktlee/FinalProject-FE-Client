import { useMutation, useQueryClient } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { getStoredToken } from '../../local-storage/userStorage'
import { queryKeys } from '../../react-query/queryKeys'
import { useUser } from '../../auth/hooks/useUser'
import { EditFormValueType } from '../myprofile/EditProfile'
import { AxiosResponse } from 'axios'

const updateUserProfile = async (editUserForm: EditFormValueType): Promise<EditFormValueType | null> => {
  if (!editUserForm) return null
  const token = getStoredToken()
  const { data } = await axiosInstance.put<AxiosResponse<EditFormValueType>>(
    '/member/updateInfo',
    editUserForm,
    {
      headers: getJWTToken(token)
    }
  )
  return data.data
}

const useEditProfile = () => {
  const queryClient = useQueryClient()
  const { updateUser } = useUser()
  const { fireToast } = useToast()

  const { mutate: editProfile } = useMutation(
    (newUserProfile: EditFormValueType) => updateUserProfile(newUserProfile),
    {
      onSuccess: () => {
        fireToast({
          id: '업데이트 성공',
          message: '정보가 성공적으로 수정되었습니다.',
          position: 'bottom',
          timer: 2000,
          type: 'success'
        })
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKeys.user)
      },
      onMutate: (newData: EditFormValueType | null) => {
        const token = getStoredToken()
        queryClient.cancelQueries(queryKeys.user)
        const prevUserData: EditFormValueType | undefined = queryClient.getQueryData(queryKeys.user)

        updateUser(token)

        return { prevUserData }
      },
      onError: (error, newData, context) => {
        if (context?.prevUserData) {
          const token = getStoredToken()

          fireToast({
            id: '업데이트 실패',
            message: '프로필 정보 업데이트에 실패하였습니다.',
            position: 'bottom',
            timer: 2000,
            type: 'warning'
          })
          updateUser(token)
        }
      }
    }
  )

  return { editProfile }
}

export default useEditProfile
