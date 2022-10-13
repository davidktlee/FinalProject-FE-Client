import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { MainCartModalState, ItemDetail } from './../../store/mainCart'
import ProductInfo from '../ProductDetail/ProductInfo'
import { useUser } from '../auth/hooks/useUser'
import { useProductDetails } from '../ProductDetail/hooks/useProductDetails'
// import { useProductDetails } from './../ProductDetail/hooks/useProductDetails'

function MainCartModal() {
  const itemDetail = useRecoilValue(ItemDetail)
  const [isLoading, setIsLoading] = useState(false)
  const modalState = useRecoilValue(MainCartModalState)
  // 상품 id를 recoilState 로 전달하고 받아서 제품 상세 불러오는 리액트 쿼리문에 전달
  const { user } = useUser()
  useEffect(() => {
    if (itemDetail) {
      console.log(itemDetail)
      setIsLoading(true)
    }
  }, [itemDetail])
  return (
    <>
      {modalState && (
        <div className="fixed width-[100%] h-[100%] top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.35)] mx-auto z-[9999]">
          <div className="max-w-[1180px] mx-auto">
            {!isLoading ? (
              <div>isLoading</div>
            ) : (
              itemDetail && (
                <ProductInfo
                  isClose={true}
                  productId={itemDetail?.productId}
                  productDetails={itemDetail}
                  memberId={user ? user?.memberId : 0}
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default MainCartModal
