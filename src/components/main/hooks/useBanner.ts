import { useQuery } from 'react-query'
import { axiosInstance } from '../../axiosinstance'
import useToast from '../../common/toast/hooks/useToast'
import { queryKeys } from '../../react-query/queryKeys'

const getBanner = async (count: number) => {
  const {
    data: { data }
  } = await axiosInstance({ url: `/image/banner?count=${count}` })
  return data
}

export const useGetBanner = (count: number) => {
  const { fireToast } = useToast()
  const fallback: [] = []
  const { data = fallback, isFetching } = useQuery(queryKeys.banner, () => getBanner(count), {
    refetchOnWindowFocus: false,
    onError: () => {
      fireToast({
        id: 'bannerFailed',
        message: '배너를 불러오는데 실패하였습니다. 다시 시도해주세요',
        position: 'bottom',
        timer: 2000,
        type: 'failed'
      })
    }
  })
  return { data, isFetching }
}
