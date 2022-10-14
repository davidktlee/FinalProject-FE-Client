import {atom} from 'recoil'
import { SearchedLensType } from '../components/header/hooks/useSearch'


export const searchedProductState = atom<SearchedLensType | null>({
  key:'searchedProduct',
  default:null
})