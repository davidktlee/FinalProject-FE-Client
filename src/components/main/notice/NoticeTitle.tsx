import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NoticeTitles, NoticePageTitle } from '../../../constants/NoticeTitles'
interface Title {
  title: string
  value: string
}
function NoticeTitle() {
  const location = useLocation()
  console.log(location)
  return (
    <div className=" flex justify-center mx-auto border-b-2 border-solid border-gray-100">
      {location.pathname.includes('notice')
        ? NoticePageTitle.map((title: Title) => (
            <NavLink
              style={({ isActive }) => ({
                borderBottom: isActive ? '3px solid #9AD0F6' : 'none'
                // padding: isActive ? '0 10px' : 'none'
              })}
              to={title.value}
              className="xl:w-[200px] md:w-[100px] text-center py-4"
            >
              {title.title}
            </NavLink>
          ))
        : NoticeTitles.map((title: Title) => (
            <NavLink
              style={({ isActive }) => ({ borderBottom: isActive ? '3px solid #9AD0F6' : 'none' })}
              to={title.value}
              className="xl:w-[200px] md:w-[150px] sm:w[100px] sm:whitespace-nowrap text-center py-4"
            >
              {title.title}
            </NavLink>
          ))}
    </div>
  )
}

export default NoticeTitle
