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
    <>
      {location.pathname.includes('notice')
        ? NoticePageTitle.map((title: Title) => (
            <NavLink
              style={({ isActive }) => ({ borderBottom: isActive ? '3px solid #9AD0F6' : 'none' })}
              to={title.value}
              className="mx-4"
            >
              {title.title}
            </NavLink>
          ))
        : NoticeTitles.map((title: Title) => (
            <NavLink
              style={({ isActive }) => ({ borderBottom: isActive ? '3px solid #9AD0F6' : 'none' })}
              to={title.value}
              className={`mx-4`}
            >
              {title.title}
            </NavLink>
          ))}
    </>
  )
}

export default NoticeTitle
