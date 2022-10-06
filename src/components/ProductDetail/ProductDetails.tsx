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

  // const getProducts = async () => {
  //   const res = await axios.get(`http://43.200.50.49:8080/main/productDetail`)
  //   console.log(res)
  //   return res
  // }

  // const { data } = useQuery('products', getProducts)
  // console.log(data)

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
