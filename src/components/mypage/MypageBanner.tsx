import React from 'react';

import { User, userState } from '../../store/user';

interface MypageBannerProps {
  user:User
}

const MypageBanner = ({user}:MypageBannerProps) => {
  
  return (
    <div className='xs:mx-auto flex xs:flex-row flex-col xs:items-center h-[200px] xs:h-[150px] xs:justify-between bg-lenssisSky text-white xs:px-4 p-2 rounded-lg'>
        <div className='flex flex-col h-full justify-around flex-1 '>
          {/* 유저네임 */}
          <p className='font-bold text-[30px]'>{user.name}</p>
          <p className=''><span className='font-semibold'>{user.readname}</span>님, 안녕하세요</p>
        </div>
        <div className='flex items-center h-full grow justify-between relative flex-1 xs:border-y-0 border-y border-solid border-gray-100/80'>
        <div className='flex flex-col items-end justify-around h-full flex-1 xs:pr-8 pr-4 '>
          <p className='justify-items-start w-full '>배송 중인 상품</p>
          <p className='font-bold text-2xl xs:text-[30px]'>1</p>
        </div>
        <div className='after:absolute after:w-[1px] after:h-full xs:after:h-[80%] after:top-0 xs:after:top-[10%] after:right-1/2 after:border-l after:border-solid after:border-gray-100/80' />
        <div className='flex flex-col items-end justify-around h-full flex-1'>
          <p className='justify-items-start w-full '>사용 가능한 쿠폰</p>
          <p className=' font-bold text-2xl xs:text-[30px]'>0</p>
        </div>
      </div>
      </div>
  );
};

export default MypageBanner;