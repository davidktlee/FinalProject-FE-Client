import React from 'react'
import { Outlet, useLocation } from 'react-router'
import PageLayout from '../components/common/ui/PageLayout'
import MainNotice from '../components/main/MainNotice'
import NoticeTitle from '../components/main/notice/NoticeTitle'

function NoticePage() {
  const location = useLocation()

  return (
    <>
      {location.pathname.includes('notice') === false ? (
        <div className="w-[90%] mx-auto">
          <MainNotice />
          <Outlet />
        </div>
      ) : (
        <PageLayout title="공지사항" layoutWidth="[90%]" isTitleVisible={true}>
          <NoticeTitle />
          <Outlet />
        </PageLayout>
      )}
    </>
  )
}

export default NoticePage
