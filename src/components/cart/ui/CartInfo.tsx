import React from 'react'
import { useRecoilState } from 'recoil'
import { totalPriceState } from '../../../store/selectProduct'

const CartInfo = () => {
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState)
  return (
    <>
      <p className="w-full xs:w-fit text-center xs:text-right">
        {totalPrice < 3000 ? (
          <>
            <span className="font-semibold">TIP! {3000 - totalPrice}円</span> 더 구매하면,
            <span className="font-semibold">500円 추가 할인</span> 받을 수 있어요.
          </>
        ) : (
          <span className='font-semibold'>이대로 구매하시면 500円 할인이 적용됩니다!</span>
        )}
      </p>
    </>
  )
}

export default CartInfo
