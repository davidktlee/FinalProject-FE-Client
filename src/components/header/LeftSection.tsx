import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LeftNavLinks from './LeftNavLinks'
import Logo from './Logo'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useRecoilState } from 'recoil'
import { sideBarState } from '../../store/sideBarToggle'


const LeftSection = () => {
  const [_,setIsShowSideBar] = useRecoilState(sideBarState)

  const sideBarToggleHandler = () => {
    setIsShowSideBar(prev => !prev)
  }
  return (
    <div className="flex items-center justify-center">
      <div className='pl-4 block xs:hidden w-[120px]'>
        <button className='flex items-center' onClick={sideBarToggleHandler}><GiHamburgerMenu size={28} /></button>
      </div>
      <Logo />
      <div className='hidden xs:block'>
      <LeftNavLinks />
      </div>
    </div>
  )
}

export default LeftSection
