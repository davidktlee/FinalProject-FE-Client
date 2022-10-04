import React from 'react';
import { Link } from 'react-router-dom';

const MobileBottomNav = () => {

  return (
    <ul className='flex items-center justify-between xs:hidden fixed bottom-0 z-50 w-screen px-4 h-[70px] bg-white shadow-[0_0_3px] shadow-gray-300'>
      <li><Link to="/mypage" ><img  className="h-8 w-8" src="/assets/grayperson.png" alt="qwe" /></Link></li>
      <li><Link to="/favorite"><img  className="h-8 w-8" src="/assets/grayheart.png" alt="qwe" /></Link></li>
      <li><Link to="/cart"><img className="h-8 w-8"  src="/assets/graycart.png" alt="qwe" /></Link></li>
      <li><Link to="/notice"><img className="h-8 w-8"  src="/assets/grayringbell.png" alt="qwe" /></Link></li>
      <li><Link to="/review"><img className="h-8 w-8"  src="/assets/graychat.png" alt="qwe" /></Link></li>
    </ul>
  );
};

export default React.memo(MobileBottomNav);