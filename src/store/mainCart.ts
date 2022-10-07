import { atom } from 'recoil'

export const mainCartModal = atom({
  key: 'mainCartModal',
  default: false
})

export const mainCartId = atom({
  key: 'mainCartId',
  default: 0
})
