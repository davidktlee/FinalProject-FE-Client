import { atom } from 'recoil'

export interface Filter {
  isOpen: boolean
}

export const filterOpenState = atom({
  key: 'filterState',
  default: false
})
