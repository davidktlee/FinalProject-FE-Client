import { AxiosResponse } from 'axios';
import React from 'react';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import useToast from '../../common/toast/hooks/useToast';
import { clearStoredToken, getStoredToken } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';
import { EditPasswordFormType } from '../myprofile/EditSecret';

const updateUserSecret = async(updateSecretForm:EditPasswordFormType) => {
    const token = getStoredToken()
    await axiosInstance.put<AxiosResponse<void>>('member/updatePassword',updateSecretForm,
    {  
      headers:getJWTToken(token)
    })

  
}


const useEditSecret = ():UseMutateFunction<void,unknown,EditPasswordFormType,unknown> => {

  const queryClient = useQueryClient()
  const {fireToast} = useToast()
  const navigate = useNavigate()
  const { mutate:updateSecret } = useMutation((updateSecretForm:EditPasswordFormType) => updateUserSecret(updateSecretForm),{
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.user)
    },
    onSuccess: () => {
      fireToast({
        id:'비밀번호 변경 성공',
        message:'비밀번호 변경에 성공하였습니다.',
        position:'bottom',
        timer: 3000,
        type:'success'
      })
      navigate('/signin')
    },
    onError: () => {
      fireToast({
        id:'비밀번호 변경 실패',
        message:'비밀번호 변경에 실패하였습니다.',
        position:'top',
        timer:2000,
        type:'warning'
      })
    }
  })

  return updateSecret
};

export default useEditSecret;