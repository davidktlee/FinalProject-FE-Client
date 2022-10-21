import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { searchedProductState } from '../../../store/searchedProduct'
import { axiosInstance } from '../../axiosinstance'
import { ColorAndImage } from '../../main/types/productTypes'

interface SearchValueType {
  keyword: string
  memberId: number | undefined
}

export interface SearchedLensType {
  data: {
    productData: productDataType[]
    totalCount: number
  }
  message: string
  status: number
}

interface productDataType {
  colorAndImage: ColorAndImage[]
  discount: number
  graphicDiameter: number[]
  isFavorite: number
  price: number
  productId: number
  series: string
}

const getSearchedLens = async ({ keyword, memberId = 0 }: SearchValueType) => {
  
  const { data } = await axiosInstance.get<SearchedLensType>(
    `/product/searchName?keyWord=${keyword}&memberId=${memberId}`
  )
  return data
}

const useSearch = () => {
  const [searchedLens, setSearchedLens] = useRecoilState(searchedProductState)
  const location = useLocation()
  const { mutate: searchLens } = useMutation<SearchedLensType, unknown, SearchValueType, unknown>(
    (searchValue: SearchValueType) => getSearchedLens(searchValue),
    {
      onSuccess: (data) => {
        setSearchedLens(data)
      }
    }
  )
  return { searchedLens, searchLens }
}

export default useSearch
