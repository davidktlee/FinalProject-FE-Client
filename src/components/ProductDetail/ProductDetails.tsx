import { useEffect } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import { useProductDetails } from './hooks/useProductDetails'
import { useUser } from '../auth/hooks/useUser'

const ProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)

  const { user } = useUser()

  const productDetails = useProductDetails(user ? user?.memberId! : 0, id)

  useEffect(() => {
    if (!user) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ProductInfo productDetails={productDetails?.data} productId={id} memberId={user?.memberId} />
      <ProductRecommend productId={id} />
      <ProductBanner />
      <ProductTabs productDetails={productDetails} />
    </div>
  )
}

export default ProductDetails
