import React from 'react';
import { useRecoilValue } from 'recoil';
import { productState } from '../../../store/product';
import CardLayout from '../common/CardLayout';

interface MyOrderProps {

}

const MyOrder = () => {

  const product = useRecoilValue(productState)
  if(!product) return (
    <div>loading...</div>
  )
  console.log(product)
  return (
    <CardLayout title='주문 내역'>
       <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold'>상품 정보</h4>
      
      <div>
        {product.map((item) => (
          <div className='flex flex-col hover:bg-slate-50' key={item.id}>
        <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold flex justify-start items-center gap-4'>
          <p className='flex items-center gap-2 text-sm'><span className='font-bold text-[#1b304a]'>주문일자</span><span className='text-[#7a7a7a]'>{item.orderedAt}</span></p>
          <p className='flex items-center gap-2 text-sm'><span className='font-bold text-[#1b304a]'>주문번호수</span><span className='text-[#7a7a7a]'>{item.orderNumber}</span></p>
        </h4>
          
          <div  className="flex justify-between items-center py-4 gap-4 border-b border-solid border-[#abc8df]" >
            <div>
            <img width={100} height={100} src={item.imageURL} alt="눈알" />
            </div>
            
            <div className='grow text-sm'>
              <p className='text-[#7a7a7a]'>{item.lensTitle}</p>
              <p className='font-bold text-[#1b304a] py-1'>{item.lensColor}</p>
              <div className='flex py-1 text-[#7a7a7a]'>옵션 선택 - {item.option.map((option) => (<div key={item.lensTitle + option}>{option}{' '}/{' '}</div>))}</div>
              <p className='py-1 text-[#7a7a7a] font-semibold'>{item.price}</p>
            </div>
            
            <div className=''>
              <button className='border border-solid border-[#d9d9d9] text-[#7a7a7a] py-1 px-4 rounded-[3px]'><span className=''>리뷰 작성하기</span></button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </CardLayout>
  );
};

export default MyOrder;