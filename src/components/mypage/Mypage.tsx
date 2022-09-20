import React from 'react';
import PageLayout from '../common/ui/PageLayout';
import MypageBanner from './MypageBanner';

const Mypage = () => {
  return (
    <PageLayout title='마이페이지' isTitleVisible={true} layoutWidth="[90%]">
      <div className='w-[90%] mx-auto'>
      <MypageBanner />
      </div>
    </PageLayout>
  );
};

export default Mypage;