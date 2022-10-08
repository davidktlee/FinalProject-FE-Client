import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../axiosinstance'
import Card from '../common/Card'
import CardContainer from '../main/CardContainer'
import { ProductResponseType } from '../main/types/productTypes'
import { queryKeys } from '../react-query/queryKeys'
import { useGetFavorite } from '../main/hooks/useFavorite'
import { FavorResponseType } from '../main/types/favorTypes'

const AllFavoriteList = () => {
  const data = useGetFavorite()
  console.log(data)

  return (
    <div>
      <div className="pt-2 grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[95%] mx-auto gap-x-[20px]">
        {data?.map((item, index) => (
          <Card
            key={item.productInfo.productId}
            idx={index}
            colorAndImage={item.colorAndImageInfo}
            productId={item.productInfo.productId}
            series={item.productInfo.productName}
            price={item.productInfo.price}
            discount={item.productInfo.discount}
            graphicDiameter={item.graphicDiameter}
          />
        ))}
      </div>
    </div>
  )
}

export default AllFavoriteList
