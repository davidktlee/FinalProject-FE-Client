import React from 'react'
import { Outlet } from 'react-router'
import Notice from '../components/main/Notice'
import NoticeTitle from '../components/main/notice/NoticeTitle'

function NoticePage() {
  return (
    <div className="py-[100px]">
      <Notice />
      
      <Outlet />
    </div>
  )
}

export default NoticePage
