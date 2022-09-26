import React from 'react';
import CardLayout from '../common/CardLayout';


const reviewArray = [];

const MyReview = () => {

  return (
    <CardLayout title='리뷰 관리'>
      <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#1B304A] font-semibold'>내 리뷰 (0)</h4>
      <p className='flex justify-center items-center h-[200px] text-[#7a7a7a] border-b border-solid border-[#ABC8DF]'>{reviewArray.length === 0 && '최근 작성한 리뷰가 없습니다'}</p>
    </CardLayout>
  );
};

export default MyReview;