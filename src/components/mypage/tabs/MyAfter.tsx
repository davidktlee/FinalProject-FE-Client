import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import CardLayout from '../common/CardLayout';
import MyClaims from './aftertabs/MyClaims';


const afterMenuArray = ['CS처리구분','주문 번호','접수 제목','접수일자','진행상태','완료일자']




const DUMMY_CLAIMS = [
  {
    process: 'cancel',
    claimNumber:1004523451,
    claimTitle:'렌즈가 깨져서 도착했습니다',
    receiptAt:'2022-08-17',
    progressed:'진행중',
    completedAt:'2022-08-19'
  },
  {
    process: 'return',
    claimNumber:1004523451,
    claimTitle:'색상이 인터넷에서 본 것과 달라 반품하려고합니다',
    receiptAt:'2022-09-01',
    progressed:'진행중',
    completedAt:'2022-09-04'
  },
  {
    process: 'exchange',
    claimNumber:1004523451,
    claimTitle:'혹시 올리브색으로 바꿀 수 있을까요? 사용안했어요',
    receiptAt:'2022-07-01',
    progressed:'진행중',
    completedAt:'2022-07-14'
  },
  {
    process: 'cancel',
    claimNumber:1004523451,
    claimTitle:'제 도수랑 맞지 않는 것 같아요',
    receiptAt:'2022-09-15',
    progressed:'진행중',
    completedAt:'2022-09-16'
  }
]

interface ClaimsType {
    process: string
    claimNumber:number
    claimTitle:string
    receiptAt:string
    progressed:string
    completedAt:string
}

const MyAfter = () => {
  const {search} = useLocation();
  const [searchParams,setSearchParams] = useSearchParams('all');
  
  const [claims,setClaims] = useState<ClaimsType[]>([]);
  

  useEffect(() => {
    searchParams.set('filter', 'all')
  },[])

  useEffect(() => {
    const query = searchParams.get('filter');  
    setClaims(DUMMY_CLAIMS.filter((item) => item.process === query));
    console.log(query);
    if(query === 'all'){
      setClaims(DUMMY_CLAIMS);
    }
  },[searchParams]);

  return (
    <CardLayout title='취소/교환/반품 내역'>
      <div className='relative'>
      <MyClaims searchParams={searchParams} setSearchParams={setSearchParams} />
      <div className='flex items-center justify-between py-2 border-b border-solid border-[#abc8df] px-1 text-sm'>
      {afterMenuArray.map((item) => <p key={item} className='flex-1 text-center'>{item}</p>)}
      </div>
      <div className='flex flex-col w-full'>
      {claims.map((item) => (
        <div key={item.claimTitle} className='flex items-center px-1 text-center py-4'>
        <p className='flex-1 '>{item.process === 'cancel' && '주문취소'} {item.process ==='exchange' && '상품교환'} {item.process === 'return' && '반품'}</p>
        <p className='flex-1 text-center'>{item.claimNumber}</p>
        <p className='flex-1 truncate text-center'>{item.claimTitle}</p>
        <p className='flex-1 text-center'>{item.receiptAt}</p>
        <p className='flex-1 text-center'>{item.progressed}</p>
        <p className='flex-1 text-center'>{item.completedAt}</p>
        </div>
      ))}
      </div>
      </div>
    </CardLayout>
  );
};

export default MyAfter;