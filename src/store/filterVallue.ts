import { atom } from 'recoil'

export const filterState = atom({
  key: 'filterValues',
  default: {
    duration: 'all',
    graphicDiameter: [],
    colors: [],
    series: [],
    features: []
  }
})

export const durationState = atom<string>({
  key: 'durationState',
  default: 'all'
})

export const graphicDiameterState = atom<string[]>({
  key: 'graphicDiameterState',
  default: []
})

export const colorState = atom<string[]>({
  key: 'colorState',
  default: []
})

export const seriesState = atom<string[]>({
  key: 'seriesState',
  default: []
})

export const featuresState = atom<string[]>({
  key: 'featuresState',
  default: []
})
