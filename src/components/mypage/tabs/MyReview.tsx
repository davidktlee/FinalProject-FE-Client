import React from 'react';
import { useRecoilValue } from 'recoil';
import { reviewState } from '../../../store/review';
import CardLayout from '../common/CardLayout';


const reviewArray = [];

const MyReview = () => {
  const review = useRecoilValue(reviewState)
  return (
    <CardLayout title='리뷰 관리'>
      <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#1B304A] font-semibold'>내 리뷰 (0)</h4>
      {review.map((item) =>(
      <div className='flex flex-col' key={item.createdAt + item.orderNumber}>
        <div>
          <p className='flex gap-[2px] items-center font-semibold text-sm py-2'><span className='text-black '>작성일자</span><span className='text-lenssisGray text-xs'>{item.createdAt}</span><span className='text-black '>주문번호</span><span className='text-lenssisGray text-xs'>{item.orderNumber}</span></p>
        </div>
        <div className='flex gap-1 xs:gap-4'>
          <img src={item.imageURL} alt="" />
          <div className='text-lenssisGray flex flex-col items-start justify-between gap-y-1 grow'>
            <p className='font-semibold text-sm'>{item.lensTitle}</p>
            <p className='font-bold text-lenssisDark text-base'>{item.lensColor}</p>
            <p className='text-xs'>{item.lensOption}</p>
            <p className='text-xs font-semibold'>{item.lensPrice}</p>
          </div>
          <div className='flex flex-col items-center justify-center min-w-[90px] gap-y-2'>
            <button className='border border-solid border-lenssisStroke text-lenssisGray text-xs w-[70px] h-[25px] rounded-sm'>수정하기</button>
            <button className='border border-solid border-lenssisStroke text-lenssisGray text-xs w-[70px] h-[25px] rounded-sm'>삭제하기</button>
          </div>
        </div>
        <div className='mt-2'>
          <p>★★★★★</p>
          <p className='font-base text-lenssisGray'>{item.content}</p>
        </div>
      </div>))}
      {review.length === 0 && <p className='flex justify-center items-center h-[200px] text-[#7a7a7a] border-b border-solid border-[#ABC8DF]'>{reviewArray.length === 0 && '최근 작성한 리뷰가 없습니다'}</p>}
    </CardLayout>
  );
};

export default MyReview;