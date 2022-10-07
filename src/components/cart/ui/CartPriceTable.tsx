import React from 'react'
import { useRecoilValue } from 'recoil'
import { shippingFeeState, totalPriceState } from '../../../store/selectProduct'

const CartPriceTable = () => {
  const totalPrice = useRecoilValue(totalPriceState)
  const shippingFee = useRecoilValue(shippingFeeState)
  return (
    <div className="border border-solid border-gray-100 bg-[#f4f6f8] font-bold text-lenssisGray flex flex-col pt-2 p-6 rounded-[3px] px-8 gap-2">
      <h3 className="text-xl py-4 text-[#5a5a5a]">지불 금액</h3>
      <div className="flex items-center justify-between">
        <p>총 상품 금액</p> <p>{totalPrice.toLocaleString()}円</p>
      </div>
      <div className="flex items-center justify-between">
        <p>총 배송비</p> <p>{shippingFee}円</p>
      </div>
      <div className="flex items-center justify-between text-black">
        <p>결제 예상 금액</p> <p>{(shippingFee + totalPrice).toLocaleString()}円</p>
      </div>
    </div>
  )
}

export default CartPriceTable
