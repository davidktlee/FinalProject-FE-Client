import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { MainCartModalState, ItemDetail } from './../../store/mainCart'
import ProductInfo from '../ProductDetail/ProductInfo'
import { useUser } from '../auth/hooks/useUser'

function MainCartModal() {
  const itemDetail = useRecoilValue(ItemDetail)
  const [isLoading, setIsLoading] = useState(false)
  const modalState = useRecoilValue(MainCartModalState)

  const { user } = useUser()
  useEffect(() => {
    if (itemDetail) {
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
