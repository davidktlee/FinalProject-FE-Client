import React from 'react'
import Card from '../common/Card'
const items = ['1', '2', '3', '4', '5', '6']
const CardContainer = () => {
  return (
    <>
      <h2>Rank</h2>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <Card items={items} />
      </div>
      <h1>New</h1>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <Card items={items} />
      </div>
    </>
  )
}

export default CardContainer
