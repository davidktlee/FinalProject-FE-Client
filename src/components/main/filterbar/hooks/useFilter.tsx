import { useMutation } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { filteredProudcts, FilterValue } from '../../../../store/filterVallue'
import { useUser } from '../../../auth/hooks/useUser'
import { axiosInstance } from '../../../axiosinstance'

const requestFilterOptions = async (filter: FilterValue) => {
  const { user } = useUser()
  const data = await axiosInstance({
    method: 'POST',
    url: '/product/byOption',
    params: user?.memberId ? { memberId: user.memberId } : { memberId: 0 },
    data: {
      colorCode: filter.colorState,
      feature: filter.featureState,
      graphicDiameter: filter.graphicDiameterState,
      period: filter.periodState,
      series: filter.seriesState
    }
  })
  return data
}

export const useFilterMutation = () => {
  const setFilteredProducts = useSetRecoilState(filteredProudcts)
  const { data, mutate: requstFilter } = useMutation((filter: FilterValue) => requestFilterOptions(filter), {
    onMutate: (filter) => {
      filter.periodState.length === 0
    },
    onSuccess: ({ data }) => {
      console.log('필터가 적용되었습니다.')
      setFilteredProducts(data.data)
      console.log(data)
    },
    onError: (error) => {
      console.log('필터가 적용에 실패했습니다.')
      console.log(error)
    }
  })
  return { data, requstFilter }
}
