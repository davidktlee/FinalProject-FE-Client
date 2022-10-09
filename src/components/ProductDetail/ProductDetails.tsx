import React, { useEffect } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { axiosInstance } from '../axiosinstance'
import ProductInfo from './ProductInfo'
import { useProductDetails } from './hooks/useProductDetails'
import { useUser } from '../auth/hooks/useUser'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/user'

const ProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)

  const user = useRecoilValue(userState)

  const productDetails = useProductDetails(user?.memberId, id)
  console.log(productDetails)

  useEffect(() => {
    if (!user) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ProductInfo productDetails={productDetails} />
      <ProductRecommend productId={id} />
      <ProductBanner />
      <ProductTabs />
    </div>
  )
}

export default ProductDetails
