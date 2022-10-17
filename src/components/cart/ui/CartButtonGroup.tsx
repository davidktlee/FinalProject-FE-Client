import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { selectProduct } from '../../../store/selectProduct'

interface CartButtonGroupProps {
  includeVerifyHandler: () => void
  buyAllHandler: () => void
}

const CartButtonGroup = ({ buyAllHandler, includeVerifyHandler }: CartButtonGroupProps) => {
  const selectedProduct = useRecoilValue(selectProduct)
  return (
    <div className="flex gap-4 flex-col xs:flex-row items-center w-full justify-between mt-4">
      {selectedProduct.length === 0 ? (
        <button
          onClick={includeVerifyHandler}
          className="flex items-center justify-center border border-solid border-lenssisStroke py-2 w-full xs:w-[220px] rounded-[5px] text-lenssisGray text-sm h-[50px]"
        >
          1개 이상 상품을 체크 해주세요.
        </button>
      ) : (
        <Link
          to="/payment"
          className="flex items-center justify-center border border-solid border-lenssisDark py-2 w-full xs:w-[220px] rounded-[5px] text-lenssisDark text-sm h-[50px] font-semibold"
        >
          선택상품구매
        </Link>
      )}
      <Link
        to="/payment"
        className="flex items-center justify-center text-center border border-solid border-transparent bg-lenssisDark py-2 w-full xs:w-[220px] rounded-[5px] text-white text-sm h-[50px] font-semibold"
        onClick={buyAllHandler}
      >
        전체상품구매
      </Link>
    </div>
  )
}

export default CartButtonGroup
