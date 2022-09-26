import React, { useState } from 'react'
import Card from '../common/Card'
import { Item, CardContainerPropsType } from '../auth/types/productTypes'
import Pagination from './common/Pagination'
const items = [
  {
    id: '1',
    title: '샌드 플러스 그레이',
    rank: '1',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  },
  {
    id: '2',
    title: '샌드 플러스 그레이',
    rank: '2',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  },
  {
    id: '3',
    title: '샌드 플러스 그레이',
    rank: '3',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  },
  {
    id: '4',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  },
  {
    id: '5',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  },
  {
    id: '6',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    discount: '800円',
    color: ['#fff', '#000', '#5a5a'],
    colorImg: [
      '/assets/eyes.png',
      '/assets/Vector.jpg',
      '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp'
    ],
    img: '/assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp',
    isNew: true
  }
]
interface BeforeItem {
  productId?: string // 상품 id
  idx: number
  name: string // 상품 타이틀
  diameter: number
  graphicDiameter: string[]
  series: string[] // 상품 시리즈
  price: number // 상품 가격
  feature: string[]
  discount: number // 할인률
  product_details_image_url: string[] // 상품 이미지
  isNew?: boolean // 새로운 상품 여부
  color_code?: string[] // 색상 코드
}

const CardContainer = ({ data, productLists }: CardContainerPropsType) => {
  const [allData, setAllData] = useState(productLists?.length)
  console.log(allData)
  return (
    <>
      {data === 'new' ? (
        <>
          <div className="flex justify-center my-8">
            <span className="text-center font-[600] text-[24px] my-10 border-b-[6px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[95%] mx-auto"></div>
          <Pagination />
        </>
      ) : (
        data === 'product' && (
          <>
            <div className="flex justify-center">
              <span className="py-2 text-center font-[600] text-[24px] my-10 border-b-[6px] border-solid border-[#1B304A]">
                {data}
              </span>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 xl:gap-2 lg:gap-2 w-[95%] mx-auto">
              {productLists &&
                productLists.map((item: BeforeItem, idx: number) => (
                  <Card
                    key={`${idx}-${item.name}`}
                    idx={idx}
                    id={item.productId}
                    name={item.name}
                    series={item.series}
                    price={item.price}
                    feature={item.feature}
                    discount={item.discount}
                    diameter={item.diameter}
                    colorCode={item.color_code}
                    productImg={item.product_details_image_url}
                    graphicDiameter={item.graphicDiameter}
                  />
                ))}
            </div>
            <Pagination />
          </>
        )
      )}
    </>
  )
}

export default CardContainer
