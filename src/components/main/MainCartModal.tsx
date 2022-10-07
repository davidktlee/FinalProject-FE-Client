import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { mainCartModal } from './../../store/mainCart'
import ProductInfo from '../ProductDetail/ProductInfo'

interface PropsType {
  productId?: number
}

function MainCartModal({ productId }: PropsType) {
  const [modalState, setModalState] = useRecoilState(mainCartModal)
  // 불러온 상품 데이터의 filter를 돌려서 productId와 같다면 띄운다 
  useEffect(() => {

  }, [])
  return (
    <>
      {modalState && (
        <div className="absolute w-[520px] h-[520px] mx-auto z-[9999]">
          <button className="absolute top-2 right-2" onClick={() => setModalState(false)}>
            X
          </button>
          <ProductInfo />
        </div>
      )}
    </>
  )
}

export default MainCartModal
