import { atom } from 'recoil'

export interface FilterValue {
  // [index: string]: string | number[] | string[]
  periodState: number[]
  graphicDiameterState: number[]
  colorState: string[]
  seriesState: string[]
  featureState: string[]
}

export const filterState = atom<FilterValue>({
  key: 'filterValues',
  default: {
    periodState: [],
    graphicDiameterState: [],
    colorState: [],
    seriesState: [],
    featureState: []
  }
})

export const filteredProudcts = atom({
  key: 'filteredProducts',
  default: []
})
