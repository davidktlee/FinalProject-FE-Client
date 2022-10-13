import React, { useEffect, useState } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import { useProductDetails } from './hooks/useProductDetails'
import { useUser } from '../auth/hooks/useUser'

interface FinalProduct {
  color: string
  detailsPrice: number
  discount: number
  imageUrlList: {
    imageType: number
    imageUrl: string
  }[]
  isFavorite: number
  productDetailsId: number
  productName: string
}

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
      {/* <Skeleton /> */}
      <ProductRecommend productId={id} />
      <ProductBanner />
      <ProductTabs productDetails={productDetails} />
    </div>
  )
}

export default ProductDetails
