import React from 'react'
import { NavLink } from 'react-router-dom'
import { NoticeTitles } from '../../../../constants/NoticeTitles'
interface Title {
  title: string
  value: string
}

function MainNoticeTab() {
  return (
    <>
      <div className="overflow-y-scroll  flex xs:hidden w-full border-b-[1px] py-4">
        {NoticeTitles.map((title: Title, index: number) => (
          <NavLink
            key={index}
            style={({ isActive }) => ({
              borderBottom: isActive ? '5px solid #1B304A' : 'none',
              fontWeight: isActive ? '700' : '600',
              color: isActive ? '#1b304a' : '#d3d3d3'
            })}
            to={title.value}
            className="py-[10px] px-2 mx-[2px] whitespace-nowrap"
          >
            {title.title}
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default MainNoticeTab
