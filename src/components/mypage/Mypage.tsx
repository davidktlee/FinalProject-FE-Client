import React from 'react';
import { Link, NavLink, Outlet, Route, Router, Routes } from 'react-router-dom';
import PageLayout from '../common/ui/PageLayout';
import MypageBanner from './MypageBanner';

const Mypage = () => {


  return (
    <PageLayout title='마이페이지' isTitleVisible={true} layoutWidth="[90%]">
      <div className='w-[90%] mx-auto'>
      <MypageBanner />
      <div className='flex mt-8'>
        <ul className='flex flex-col items-start justify-start w-[20%] gap-y-1 text-[#7a7a7a] text-sm'>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="myorder">주문 내역</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="mytracking">배송 조회</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="myafter">취소/교환/반품 내역</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="myreview">리뷰 관리</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="myprofile">회원 정보 수정</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="mygrade">회원 등급</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to="mycoupon">쿠폰함</NavLink></li>
        </ul>
      <div className='grow'>
      <Outlet />
      </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Mypage;