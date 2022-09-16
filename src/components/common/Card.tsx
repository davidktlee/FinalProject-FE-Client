import React from 'react'
import { useLocation } from 'react-router'
interface PropTypes {
  items: Item[]
}
interface Item {
  id: string
  label: string
}
const Card = ({ items }: PropTypes) => {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/'
        ? items.map((el: Item) => (
            <div key={el.id} className="relative flex flex-col mr-[11px]  md:mr-[20px]">
              {/* 순위 라벨 */}
              <span className="absolute top-2 left-2 w-4 h-4 border-2 border-solid">
                <img src="" alt="" />
              </span>
              <img
                src=""
                alt=""
                className="w-[172px] h-[128px] rounded-md md:w-[280px] md:h-[200px] border-solid border-2"
              />
              {el.label}
            </div>
          ))
        : null}
    </>
  )
}

export default Card
