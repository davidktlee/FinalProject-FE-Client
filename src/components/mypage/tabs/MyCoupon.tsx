import React from 'react';
import CardLayout from '../common/CardLayout';


const coupon = [
  {
    expirationDate:'2022-10-22',
    couponTitle:'생일축하쿠폰',
    couponDiscount:'10%',
    createdAt:'2022-09-23'
  }
]


const MyCoupon = () => {
  return (
    <CardLayout title="쿠폰함">
      {coupon.map((item) => (
        <div className='text-xs xs:text-sm flex flex-col gap-2 border border-solid border-gray-400 p-2 mt-4 max-w-[400px]' key={item.couponDiscount + item.createdAt + item.couponTitle}>
          <p className='font-semibold text-lenssisDark'>{item.expirationDate}까지 사용 가능</p>
          <p className='text-sm font-bold pb-2 border-b border-solid border-gray-400'>{item.couponTitle}</p>
          <p className='pt-2 text-[#7a7a7a]'>{item.couponDiscount} 할인</p>
          <p className='text-[#7a7a7a]'>{item.createdAt}</p>
        </div>
      ))}
    </CardLayout>
  );
};

export default MyCoupon;