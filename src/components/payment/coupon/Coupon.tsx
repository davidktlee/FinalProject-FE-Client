import React from 'react';

const Coupon = () => {
  return (
    <>
    <div className='flex justify-start items-center my-4 max-w-[500px]'>
    <label className='min-w-[140px] text-lenssisDark font-bold'><span>할인코드 적용</span></label>
    <div className={`flex items-start justify-start w-full `}>
    <input name="orderer" onChange={() => {}} value="" className={`w-full h-12 border border-solid border-gray-200 rounded-md max-w-[310px] pl-1 focus:outline-1 focus:outline-[#ABC8DF]`} type="text"/>
    </div>
    <button className='w-[120px] h-12 bg-lenssisDark text-white font-bold rounded-md ml-1'>적용</button>
   </div>
   <div className='flex justify-start items-center my-4 max-w-[500px]'>
    <label className='min-w-[140px] text-lenssisDark font-bold'><span>쿠폰 등록</span></label>
    
    <button className='w-[200px] h-12 bg-lenssisDark text-white font-bold rounded-md ml-1'>쿠폰 등록</button>
   </div>
   </>
  );
};

export default Coupon;