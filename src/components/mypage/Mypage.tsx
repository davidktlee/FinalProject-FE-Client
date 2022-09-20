import React from 'react';
import { Link, NavLink, Outlet, Route, Router, Routes } from 'react-router-dom';
import PageLayout from '../common/ui/PageLayout';
import MypageBanner from './MypageBanner';
import SideNavBar from './SideNavBar';

const Mypage = () => {


  return (
    <PageLayout title='마이페이지' isTitleVisible={true} layoutWidth="[90%]">
      <div className='w-[90%] mx-auto'>
      <MypageBanner />
      <div className='flex mt-8'>
        <SideNavBar />
      <div className='grow'>
      <Outlet />
      </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default Mypage;