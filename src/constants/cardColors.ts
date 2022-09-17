import React from 'react'

interface Rank {
  [key: string]: string
  '1': string
  '2': string
  '3': string
  '0': string
}

export const rankColor: Rank = {
  '1': '#FFDF5D',
  '2': '#D9D9D9',
  '3': '#FFB629',
  '0': '#B4D2E6'
}

// 태그 컬러
