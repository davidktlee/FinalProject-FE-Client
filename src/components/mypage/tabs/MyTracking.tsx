import React from 'react';
import { useRecoilValue } from 'recoil';
import { productState } from '../../../store/product';
import CardLayout from '../common/CardLayout';

const MyTracking = () => {
  const product = useRecoilValue(productState)
  return (
    <CardLayout title='배송 조회'>
       <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold flex items-center justify-between relative'>
        <span>상품 정보</span>
        <span className='text-left absolute right-[180px]'>진행상태</span>
        </h4>
      {product.map((item) => (
        <div className="flex justify-between items-center py-4 gap-4 border-b border-solid border-[#abc8df]" >
            <div className='shrink'>
            <img width={100} height={100} src={item.imageURL} alt="눈알" />
            </div>
            <div className='text-sm flex-1'>
              <p className='text-[#7a7a7a]'>{item.lensTitle}</p>
              <p className='font-bold text-[#1b304a] py-1'>{item.lensColor}</p>
              <div className='flex py-1 text-[#7a7a7a]'>옵션 선택 - {item.option.map((option) => (<div key={item.lensTitle + option}>{option}{' '}/{' '}</div>))}</div>
              <p className='py-1 text-[#7a7a7a] font-semibold'>{item.price}</p>
            </div>
            <div className='shrink min-w-[200px]'>
              <p className='font-bold text-[#1b304a] text-center'>{item.shippingStatus}</p>
            </div>
            <div className=''>
              <button className='border border-solid border-[#d9d9d9] text-[#7a7a7a] py-1 px-4 rounded-[3px]'><span className=''>주문 취소</span></button>
            </div>
          </div>
      ))
        }
    </CardLayout>
  );
};

export default MyTracking;