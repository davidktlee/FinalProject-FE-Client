import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LeftNavLinks from './LeftNavLinks'
import Logo from './Logo'

const LeftSection = () => {
  return (
    <div className="flex items-center justify-center">
      <Logo />
      <LeftNavLinks />
    </div>
  )
}

export default LeftSection
