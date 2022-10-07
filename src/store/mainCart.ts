import { atom } from 'recoil'

type MainCartModal = boolean
type MainCartId = number[] | []

export const mainCartModal = atom<MainCartModal>({
  key: 'mainCartModal',
  default: false
})

export const mainCartId = atom<MainCartId>({
  key: 'mainCartId',
  default: []
})
