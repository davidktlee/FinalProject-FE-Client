import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, Route, Router, Routes, useNavigate } from 'react-router-dom'


import { useUser } from '../auth/hooks/useUser'
import useToast from '../common/toast/hooks/useToast'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import MypageBanner from './MypageBanner'
import SideNavBar from './SideNavBar'

const Mypage = () => {
  const navigate = useNavigate()
  const {user} = useUser()
  const {fireToast} = useToast()


  useEffect(() => {
    navigate('/mypage/myorder')
  }, [])

  useEffect(() => {
    if(!user){
      fireToast({
        id:'로그인 기록 없음',
        message:'로그인 해주세요!',
        position: 'top',
        timer:2000,
        type:'warning'
      })
      navigate('/signin')
    }
  },[])

 
  if(!user) {
    return <div>Loading...</div>
  }

  return (
    <PageLayout layoutWidth="[90%]">
      <CardTemplate title="마이페이지" isTitleVisible={true}>
        <div className="w-[90%] mx-auto">
          <MypageBanner user={user} />
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
