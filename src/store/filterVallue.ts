import { atom } from 'recoil'

export interface FilterValut {
  duration: string[]
  graphicDiameter: number[]
  series: string[]
  colors: string[]
  features: string[]
}

export const filterValueState = atom<FilterValut>({
  key: 'filterValueState',
  default: {
    duration: [],
    graphicDiameter: [],
    series: [],
    colors: [],
    features: []
  }
})
