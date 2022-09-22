import React from 'react';
import { NavLink } from 'react-router-dom';



const navMenuArray = [
  {
  title:'주문 내역',
  path:'myorder'
  },
  {
    title:'배송 조회',
    path:'mytracking'
  },
  {
    title:'취소/교환/반품 내역',
    path:'myafter'
  },
  {
    title:'리뷰 관리',
    path:'myreview'
  },
  {
    title:'회원 정보 수정',
    path:'myprofile'
  },
  {
    title:'회원 등급',
    path:'mygrade'
  },
  {
    title:'쿠폰함',
    path:'mycoupon'
  },
  ]

const SideNavBar = () => {
  return (
    <ul className='flex flex-col items-start justify-start w-[20%] gap-y-1 text-[#7a7a7a] text-sm'>
      {navMenuArray.map((item) => (
        <li key={item.title}><NavLink className={({isActive}) => (isActive ? 'text-[#1B304A] font-bold' : 'text-inherit')} to={item.path}>{item.title}</NavLink></li>
      ))}
        </ul>
  );
};

export default React.memo(SideNavBar);