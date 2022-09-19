import React from 'react'
import { NavLink } from 'react-router-dom'
import NoticeTitle from '../../constants/NoticeTitle'
const Notice = () => {
  return (
    <div className="flex justify-center items-center w-full mx-auto">
      {NoticeTitle.map((title: string) => (
        <div>{title}</div>
      ))}
    </div>
  )
}

export default Notice
