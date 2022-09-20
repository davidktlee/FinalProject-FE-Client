import React, { useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import CardLayout from '../common/CardLayout';
import MyClaims from './aftertabs/MyClaims';


const afterMenuArray = ['CS처리구분','주문 번호','접수 제목','접수일자','진행상태','완료일자']

const MyAfter = () => {
  const {search} = useLocation();
  
  return (
    <CardLayout title='취소/교환/반품 내역'>
      <div className='relative'>
      <MyClaims />
      <div className='flex items-center justify-between py-2 border-b border-solid border-[#abc8df] px-4 text-sm'>
      {afterMenuArray.map((item) => <p>{item}</p>)}
      {/* search가 all일때, cancel일때,exchange일때,return일때 각각 다른 화면 보여주기 */}
      </div>
      </div>
    </CardLayout>
  );
};

export default MyAfter;