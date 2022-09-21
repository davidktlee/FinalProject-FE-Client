import React from 'react';

const MypageBanner = () => {
  return (
    <div className='mx-auto flex items-center h-[160px] justify-between bg-[#92C8ED] text-white px-10 rounded-lg'>
        <div className='flex flex-col h-full justify-around w-[40%]'>
          <p className='font-bold text-[30px]'>유저이름</p>
          <p className=''><span className='font-semibold'>유저 읽는 이름</span>님, 안녕하세요</p>
        </div>
        <div className='flex flex-col items-stretch h-[70%] justify-between w-[30%] pr-8 border-r border-solid border-white '>
          <p>배송 중인 상품</p>
          <p className='text-right font-bold text-[30px]'>1</p>
        </div>
        <div className='flex flex-col items-stretch  h-[70%] justify-between w-[30%] px-4'>
          <p>사용 가능한 쿠폰</p>
          <p className='text-right font-bold text-[30px]'>0</p>
        </div>
      </div>
  );
};

export default MypageBanner;