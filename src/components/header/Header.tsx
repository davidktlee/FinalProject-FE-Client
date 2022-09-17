import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import TopInfomation from './TopInfomation'

const Header = () => {
  return (
    <nav className="fixed flex flex-col bg-[#92C8ED] text-white z-50 w-full">
      <TopInfomation />
      <div className="flex items-center h-[50px] justify-between pb-[15px]">
        <LeftSection />
        <RightSection />
      </div>
    </nav>
  )
}

export default Header
