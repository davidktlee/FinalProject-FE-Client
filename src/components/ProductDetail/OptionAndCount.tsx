import React from 'react'
import { HiMinus, HiOutlineX, HiPlus, HiX } from 'react-icons/hi'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { finalProductState } from '../../store/productByOptions'
import { productDetailsState } from '../../store/productDetails'

interface Props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const OptionAndCount = ({ onClose }: Props) => {
  const resetOptions = useResetRecoilState(productDetailsState)
  const [finalProduct, setFinalProduct] = useRecoilState(finalProductState)

  const closeHanlder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClose(false)
    resetOptions()
  }

  const countHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget
    if (name === 'plus') setFinalProduct((prev) => ({ ...prev, pcs: Number(prev.pcs) + 1 }))
    else if (name === 'minus') {
      if (Number(finalProduct.pcs) > 1) setFinalProduct((prev) => ({ ...prev, pcs: Number(prev.pcs) - 1 }))
    }
  }

  return (
    <div className="w-full h-[60px] text-[12px] text-black px-[7px] py-[6px] border-solid border-[#dadada] border-[1px] rounded-[5px] ">
      <div className="py-[2px] pb-[4px] flex justify-between">
        <span>사용기간: 원데이 / 직경: 13.5mm / 그레이 / 도수: -6.00</span>
        <button
          onClick={(e) => closeHanlder(e)}
          className="border-solid border-[1px] border-[#dadada] rounded-[5px] p-[2px]"
        >
          <HiOutlineX color="#dadada" />
        </button>
      </div>
      <div className="">
        <div className="flex w-[70px] border-solid border-[1px] border-[#dadada] rounded-[5px]">
          <button
            onClick={(e) => countHandler(e)}
            name="minus"
            className=" w-[20px] h-[20px] px-[2px] py-[5] ring-[1px] ring-[#dadada] rounded-[4px]"
          >
            <HiMinus style={{ marginLeft: '1px' }} color="#5a5a5a" />
          </button>
          <span className="text-[14px] w-[30px] h-[20px] text-center leading-[18px]">
            {finalProduct?.pcs!}
          </span>
          <button
            onClick={(e) => countHandler(e)}
            name="plus"
            className="w-[20px] h-[20px] px-[2px] py-[5] border-solid ring-[1px] ring-[#dadada] rounded-[4px] "
          >
            <HiPlus style={{ marginLeft: '1px' }} color="#5a5a5a" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptionAndCount
