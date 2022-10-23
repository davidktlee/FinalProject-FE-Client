import React, { Suspense } from 'react'
import Skeleton from '../components/ProductDetail/Skeleton'
const ProductDetails = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => import('../components/ProductDetail/ProductDetails')
  )
})

const ProductDetail = () => {
  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <ProductDetails />
      </Suspense>
    </div>
  )
}

export default ProductDetail
