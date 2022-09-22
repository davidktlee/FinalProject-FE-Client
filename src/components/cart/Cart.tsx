import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { productState } from '../../store/product'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'




const Cart = () => {
  
  return (
  <PageLayout layoutWidth='[90%]' innerTop="top-[30%]" >
    <CardTemplate title='장바구니' isTitleVisible={true}>
    <div className='flex items-center justify-between w-full'>
      <div className='w-3/5'>
        <select></select>
      장바구니에 담은 아이템들(+체크박스)
      삭제버튼
      </div>
      <div className='w-2/5'>
        <div className='border border-solid border-gray-100 bg-indigo-200'>
        <h3>지불금액</h3>
        <p>총 상품 금액</p>
        <p>총 배송비</p>
        <p>결제 예상 금액 </p>
        </div>
        <div className='flex gap-4 items-center w-full justify-between px-4 mt-4'>
          <button className='border border-solid border-gray-400 py-2 w-[220px] rounded-md'>선택상품구매</button>
          <button className='border border-solid border-gray-400 py-2 w-[220px] rounded-md'>전체상품구매</button>
        </div>
        <div className='flex flex-col items-center mt-10'>
          <p className=''>3,000엔 이상 구매 시 무료 배송</p>
          <Link to="/">쇼핑 계속</Link>
        </div>
      </div>
    </div>
    </CardTemplate>
    
    <CardTemplate title='2번'>
    <h3 className='font-bold text-lenssisDark pb-2 border-b border-solid border-lenssisGray'>이런 상품도 있어요!</h3>
    <div className='flex items-center gap-4 mt-12'>
    {Array(4).fill(0).map((item,index) => (
      <div key={index} className="grow h-fit border border-solid border-red-300">{item}</div>
    ))}
    </div>
    </CardTemplate>
    
  </PageLayout>
  )
}

export default Cart
