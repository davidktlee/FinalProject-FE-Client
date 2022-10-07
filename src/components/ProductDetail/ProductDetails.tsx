import React, { useEffect } from 'react'
import ProductBanner from './ProductBanner'
import ProductRecommend from './ProductRecommend'
import ProductTabs from './ProductTabs'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../axiosinstance'
import ProductInfo from './ProductInfo'

const ProductDetails = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <ProductInfo />
      <ProductRecommend />
      <ProductBanner />
      <ProductTabs />
    </div>
  )
}

export default ProductDetails
