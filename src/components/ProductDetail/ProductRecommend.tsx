import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../axiosinstance'
import Card from '../common/Card'
import { queryKeys } from '../react-query/queryKeys'
import MobileProductRecommend from './mobile/MobileProductRecommend'

const ProductRecommend = () => {
  const getProduct = async () => {
    const res = await axiosInstance({
      url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products'
    })
    return res.data
  }

  const { data: productLists } = useQuery([queryKeys.product], getProduct, {
    refetchOnWindowFocus: false
  })
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mb-10 mx-auto ring-2 ring-[#DADADA] rounded-2xl shadow-lg xs-max:w-[95%]">
        <div className="flex justify-between px-10 xs-max:p-0">
          <p className="font-bold text-lg text-black xs-max:text-[20px]">이런 상품도 있어요!</p>
          <p className="xs-max:hidden">랜덤으로 상품 8개 보여주기</p>
          <p className="xs:hidden">더보기</p>
        </div>
        <div className="divider h-[1px] mt-4 mb-8 bg-[#BCBCBC] xs-max:mb-0"></div>
        <div className="xs-max:hidden flex flex-wrap -m-4 p-4">
          {productLists &&
            productLists
              .slice(0, 4)
              .map((item: any, idx: number) => (
                <Card
                  key={`${item.productId}-${idx}`}
                  idx={idx}
                  id={item.productId}
                  name={item.name}
                  series={item.series}
                  price={item.details.price}
                  discount={item.details.discount}
                  diameter={item.diameter}
                  colorCode={item.details.color_code}
                  productImg={item.details.product_details_image_url}
                  graphicDiameter={item.details.graphicDiameter}
                />
              ))}
        </div>
        <div className="xs:hidden ">
          <MobileProductRecommend />
        </div>
      </div>
    </section>
  )
}

export default ProductRecommend
