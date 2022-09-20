import React from 'react';
import CardLayout from '../common/CardLayout';


const DUMMY_PRODUCT = [
  {
    id:1,
    image:'어쩌구',
    lensTitle:'랜시스',
    lensColor:'올리브',
    option:['그래픽 직경 13.5mm','도수: 0.7','수량: 1개'],
    price: '18000원',
    orderedAt:'2022-05-17',
    orderNumber:1024214524
  },
  {
    id:2,
    image:'어쩌구',
    lensTitle:'샌드',
    lensColor:'베이지',
    option:['그래픽 직경 13.2mm','도수: 0.4','수량: 2개'],
    price: '36000원',
    orderedAt:'2022-03-24',
    orderNumber:103133324
  },
  {
    id:3,
    image:'어쩌구',
    lensTitle:'에일린',
    lensColor:'레드',
    option:['그래픽 직경 12.3mm','도수: 0.5','수량: 1개'],
    price: '18000원',
    orderedAt:'2022-09-01',
    orderNumber:1024214524
  },
  
]

const MyOrder = () => {
  return (
    <CardLayout title='주문 내역'>
       <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold'>상품 정보</h4>
      
      <div>
        {DUMMY_PRODUCT.map((item) => (
          <div className='flex flex-col hover:bg-slate-50'>
        <h4 className='py-2 border-b border-solid border-[#abc8df] text-[#5a5a5a] font-semibold flex justify-start items-center gap-4'>
          <p className='flex items-center gap-2 text-sm'><span className='font-bold text-[#1b304a]'>주문일자</span><span className='text-[#7a7a7a]'>{item.orderedAt}</span></p>
          <p className='flex items-center gap-2 text-sm'><span className='font-bold text-[#1b304a]'>주문번호수</span><span className='text-[#7a7a7a]'>{item.orderNumber}</span></p>
        </h4>
          
          <div key={item.id} className="flex justify-between items-center py-4 gap-4 border-b border-solid border-[#abc8df]" >
            <div>
            <img width={100} height={100} src="/assets/eyes.png" alt="눈알" />
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