import { atom } from "recoil";
import { RegisterType } from "../components/auth/types/userTypes";


export interface User {
  address: string
  birthday: string
  createdAt: string
  email: string
  memberId: number
  name: string
  phone: string
  postCode: number
  readname: string
  updatedAt: string
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    address: '',
    birthday: '',
    createdAt: '',
    email: '',
    memberId: 0,
    name: '',
    phone: '',
    postCode: 0,
    readname: '',
    updatedAt: '',
  }
})
