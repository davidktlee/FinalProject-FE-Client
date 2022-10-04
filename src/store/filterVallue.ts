import { atom } from 'recoil'

interface FilterValue {
  // [index: string]: string | number[] | string[]
  durationState: string
  graphicDiameterState: number[]
  colorState: string[]
  seriesState: string[]
  featureState: string[]
}

export const filterState = atom<FilterValue>({
  key: 'filterValues',
  default: {
    durationState: 'all',
    graphicDiameterState: [],
    colorState: [],
    seriesState: [],
    featureState: []
  }
})
