import React from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/user'
import { axiosInstance } from '../axiosinstance'
import Card from '../common/Card'
import { useGetProductRandom } from '../main/hooks/useProductLists'
import { useUser } from '../auth/hooks/useUser'
import MobileProductRecommend from './mobile/MobileProductRecommend'

type ProductRecommendProps = {
  productId: number
}

const ProductRecommend = ({ productId }: ProductRecommendProps) => {
  const { user } = useUser()

  const data = useGetProductRandom(user?.memberId!, productId)

  return (
    <section className="text-gray-600 body-font max-w-[1180px] mx-auto">
      <div className=" container px-5 py-10 mx-auto drop-shadow-basic rounded-[10px] bg-white xs-max:w-[95%]">
        <div className="flex justify-between px-10 xs-max:p-0">
          <p className="font-bold text-lg text-black xs-max:text-[20px]">이런 상품도 있어요!</p>
          <p className="xs-max:hidden">랜덤으로 상품 4개 보여주기</p>
          <p className="xs:hidden">더보기</p>
        </div>
        <div className="divider h-[1px] mt-4 mb-8 bg-[#BCBCBC] xs-max:mb-0"></div>
        <div className="max-w-[1180px] xs-max:hidden flex flex-wrap -m-4 p-4 ">
          {data?.map((item: any, idx: number) => (
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
        <div className="xs:hidden ">
          <MobileProductRecommend />
        </div>
      </div>
    </section>
  )
}

export default ProductRecommend
