import React, { useEffect } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import { useProductDetails } from './hooks/useProductDetails'
import { useUser } from '../auth/hooks/useUser'

const ProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)

  const { user } = useUser()

  const productDetails = useProductDetails(user?.memberId!, id)

  useEffect(() => {
    if (!user) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ProductInfo productDetails={productDetails?.data} />
      <ProductRecommend productId={id} />
      <ProductBanner />
      <ProductTabs />
    </div>
  )
}

export default ProductDetails
