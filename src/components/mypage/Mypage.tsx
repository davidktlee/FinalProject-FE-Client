import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import MypageBanner from './MypageBanner'
import SideNavBar from './SideNavBar'

const Mypage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/mypage/myorder')
  }, [])

  return (
    <PageLayout layoutWidth="[90%]">
      <CardTemplate title="마이페이지" isTitleVisible={true}>
        <div className="w-[90%] mx-auto">
          <MypageBanner />
          <div className="flex mt-8">
            <SideNavBar />
            <div className="grow">
              <Outlet />
            </div>
          </div>
        </div>
      </CardTemplate>
    </PageLayout>
  )
}

export default Mypage
