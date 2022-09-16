import React from 'react'
import Card from '../common/Card'
const items = [
  {
    id: '1',
    label: '일'
  },
  {
    id: '2',
    label: '이'
  },
  {
    id: '3',
    label: '일'
  },
  {
    id: '4',
    label: '이'
  },
  {
    id: '5',
    label: '일'
  },
  {
    id: '6',
    label: '이'
  }
]

const CardContainer = () => {
  return (
    <div className="m-4">
      <h2 className="my-2">(받아온 데이터리스트 종류 rank | new)</h2>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <Card items={items} />
      </div>
    </div>
  )
}

export default CardContainer
