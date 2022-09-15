import React from 'react'
interface PropTypes {
  items: string[]
}
const Card = ({ items }: PropTypes) => {
  return (
    <>
      {items.map((el: string) => (
        <div>{el}</div>
      ))}
    </>
  )
}

export default Card
