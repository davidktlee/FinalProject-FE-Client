import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import TopInfomation from './TopInfomation'
import {TbSearch} from 'react-icons/tb'
import {FiFilter} from 'react-icons/fi'

const Header = () => {
  
  return (
    <nav className="fixed flex flex-col bg-[#ABC8DF] text-white z-50 w-full">
      <TopInfomation />
      <div className="flex items-center h-[50px] justify-between pb-[15px]">
        <LeftSection />
        <div className='hidden xs:block'>
        <RightSection />
        </div>
        <div className='flex items-center xs:hidden gap-4 pr-2'>
          <button className='flex items-center'><TbSearch size={28} /></button>
          <button className='flex items-center'><FiFilter size={28} /></button>
        </div>
      </div>
    </nav>
  )
}

export default Header
