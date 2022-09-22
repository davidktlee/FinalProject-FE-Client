import React from 'react';
import { useRecoilValue } from 'recoil';
import { productState } from '../../../store/product';
import CardLayout from '../common/CardLayout';

const MyTracking = () => {
  const product = useRecoilValue(productState)
  return (
    <CardLayout title='배송 조회'>
       <h4 className='relative py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold flex'>
        <span className='grow text-center'>상품 정보</span>
        <span className='flex-1 text-center pl-32'>진행상태</span>
        </h4>


      {product.map((item) => (
        <div className="flex flex-col xs:flex-row justify-between items-center py-4 border-b border-solid border-[#abc8df]" >
            
            <div className='flex items-center gap-4'>
            <div className=''>
            <img width={100} height={100} src={item.imageURL} alt="눈알" />
            </div>

            <div className='text-xs xs:text-sm grow'>
              <p className='text-[#7a7a7a]'>{item.lensTitle}</p>
              <p className='font-bold text-[#1b304a] xs:py-1'>{item.lensColor}</p>
              <div className=' xs:py-1 text-[#7a7a7a]'>옵션 선택 - {item.option.map((option) => (<span key={item.lensTitle + option}>{option}{' '}/</span>))}</div>
              <p className='xs:py-1 text-[#7a7a7a] font-semibold'>{item.price}</p>
            </div>
            </div>


            <div className='flex flex-col xs:flex-row items-center xs:justify-between mx-auto flex-1 w-full xs:w-fit'>
              <p className='font-bold xs:flex flex-row xs:flex-col text-[#1b304a] mx-auto text-left xs:text-center w-full xs:w-fit py-4 xs:py-0'>
                <span>{item.shippingStatus}</span>
                <span className='pl-2 font-normal xs:text-sm text-xs'>{item.shippingStatus === '배송중' && 'CJ대한통운 104232442' }</span>
                </p>
              <div className='flex gap-2 items-center w-full xs:w-fit justify-start'>
              <button className='block xs:hidden border border-solid border-[#d9d9d9] text-[#7a7a7a] py-1 px-4 rounded-[3px]'><span className=''>리뷰 작성하기</span></button>
              <button className='block border border-solid border-[#d9d9d9] text-[#7a7a7a] py-1 px-4 rounded-[3px]'><span className=''>주문 취소</span></button>
              
              
            </div>
            </div>

            

          </div>
      ))
        }
    </CardLayout>
  );
};

export default MyTracking;