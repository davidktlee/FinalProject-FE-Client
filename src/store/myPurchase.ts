import {atom} from 'recoil'
import { InfoType } from '../components/mypage/hooks/useOrder'

export const myPurchaseState = atom<InfoType[] | null>({
  key:'myPurchase',
  default:null
})