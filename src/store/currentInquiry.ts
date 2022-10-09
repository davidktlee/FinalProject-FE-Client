import { atom } from "recoil";
import { NonMemberDataType } from "../components/nonmember/hooks/useNonMember";


export const currentInquiryState = atom<NonMemberDataType[] | null>({
  key: 'currentInquiryState',
  default: null
})