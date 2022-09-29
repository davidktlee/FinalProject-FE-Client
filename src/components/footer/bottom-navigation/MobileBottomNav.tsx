import React from 'react';
import { Link } from 'react-router-dom';
import {BsPerson,BsHeart,BsCart,BsBell,BsChatDots} from 'react-icons/bs'
const MobileBottomNav = () => {
  return (
    <div className='flex items-center justify-between xs:hidden fixed bottom-0 z-50 w-full px-4 h-[70px] bg-white shadow-[0_0_3px] shadow-gray-300'>
      <Link to="/mypage"><BsPerson size={28} color="#D3D3D3" /></Link>
      <Link to="/favorite"><BsHeart size={28} color="#D3D3D3" /></Link>
      <Link to="/cart"><BsCart size={28} color="#D3D3D3" /></Link>
      <Link to="/notice"><BsBell size={28} color="#D3D3D3" /></Link>
      <Link to="/review"><BsChatDots size={28} color="#D3D3D3" /></Link>
    </div>
  );
};

export default MobileBottomNav;