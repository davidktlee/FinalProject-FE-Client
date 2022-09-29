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
          <p><span>작성일자</span><span>{item.createdAt}</span><span>주문번호</span><span>{item.orderNumber}</span></p>
        </div>
        <div className='flex'>
          <img src={item.imageURL} alt="" />
          <div>
            <p>{item.lensTitle}</p>
            <p>{item.lensColor}</p>
            <p>{item.lensOption}</p>
            <p>{item.lensPrice}</p>
          </div>
          <div>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        </div>
        <div>
          <p>{item.lensRating}</p>
          <p>{item.content}</p>
        </div>
      </div>))}
      {review.length === 0 && <p className='flex justify-center items-center h-[200px] text-[#7a7a7a] border-b border-solid border-[#ABC8DF]'>{reviewArray.length === 0 && '최근 작성한 리뷰가 없습니다'}</p>}
    </CardLayout>
  );
};

export default MyReview;