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

const ProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)

  // const { user } = useUser()
  const [data, setData] = useState<any>()

  const getProductDetails = async () => {
    const data = await axios.get('https://6345098639ca915a69f4998a.mockapi.io/productDetails')
    setData(data.data[0])
    console.log(data.data[0])
    return data.data[0]
  }

  // const productDetails = useProductDetails(user?.memberId!, id)

  useEffect(() => {
    // if (!user) return
    window.scrollTo(0, 0)
    getProductDetails()
  }, [])

  return (
    <div>
      <ProductInfo productDetails={data} />
      <ProductRecommend productId={id} />
      <ProductBanner />
      <ProductTabs />
    </div>
  )
}

export default ProductDetails
