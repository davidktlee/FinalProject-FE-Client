import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { mainCartId, mainCartModal } from './../../store/mainCart'
import ProductInfo from '../ProductDetail/ProductInfo'
// import { useProductDetails } from './../ProductDetail/hooks/useProductDetails'

function MainCartModal() {
  const [modalState, setModalState] = useRecoilState(mainCartModal)
  // 상품 id를 recoilState 로 전달하고 받아서 제품 상세 불러오는 리액트 쿼리문에 전달
  const [productId, setProductId] = useRecoilState(mainCartId)
  // useQuery문
  // const productDetail = useProductDetails(productId)
  useEffect(() => {}, [])
  return (
    <>
      {modalState && (
        <div className="fixed width-[100%] h-[100%] top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.35)] mx-auto z-[9999]">
          <div className="max-w-[1180px] mx-auto">
            <ProductInfo isClose={true} />
          </div>
        </div>
      )}
    </>
  )
}

export default MainCartModal
