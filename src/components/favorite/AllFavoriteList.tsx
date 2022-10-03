import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../axiosinstance'
import Card from '../common/Card'
import CardContainer from '../main/CardContainer'
import { Item } from '../main/types/productTypes'
import { queryKeys } from '../react-query/queryKeys'

const AllFavoriteList = () => {
  const getProduct = async () => {
    const res = await axiosInstance({
      url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products'
    })
    return res.data
  }
  const { data: productLists } = useQuery(['favoriteAll'], getProduct, {
    refetchOnWindowFocus: false
  })
  return (
    <div>
      <div className="pt-2 grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[95%] mx-auto gap-x-[20px]">
        {productLists &&
          productLists
            .slice(0, 2)
            .map((item: Item, idx: number) => (
              <Card
                key={`${item.productId}-${idx}`}
                idx={idx}
                colorAndImage={item.colorAndImage}
                productId={item.productId}
                series={item.series}
                price={item.price}
                discount={item.discount}
                graphicDiameter={item.graphicDiameter}
              />
            ))}
      </div>
    </div>
  )
}

export default AllFavoriteList
