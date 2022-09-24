import React from 'react'
import Card from '../common/Card'
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
interface Item {
  id: string // 상품 id
  title: string // 상품 타이틀
  rank?: string // 상품 순위
  series: string // 상품 시리즈
  price: string // 상품 가격
  tag?: string[] // 상품 밑 태그
  discount?: string // 할인률
  img?: string // 상품 이미지
  isNew?: boolean // 새로운 상품 여부
  color?: string[] // 색상 코드
  colorImg: string[]
}
interface Props {
  data: Data
}
type Data = 'product' | 'new'

const CardContainer = ({ data }: Props) => {
  return (
    <>
      {data === 'new' ? (
        <>
          <div className="flex justify-center my-8">
            <span className="text-center font-[600] text-[24px] my-10 border-b-[6px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[95%] mx-auto">
            {items.map((item: Item, idx: number) => (
              <Card
                key={item.id}
                idx={idx}
                title={item.title}
                rank={item.rank}
                id={item.id}
                series={item.series}
                price={item.price}
                tag={item.tag}
                discount={item.discount}
                img={item.img}
                color={item.color}
                colorImg={item.colorImg}
              />
            ))}
          </div>
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
              {items.map((item: Item, idx: number) => (
                <Card
                  key={item.id}
                  idx={idx}
                  title={item.title}
                  rank={item.rank}
                  id={item.id}
                  series={item.series}
                  price={item.price}
                  tag={item.tag}
                  discount={item.discount}
                  img={item.img}
                  color={item.color}
                  colorImg={item.colorImg}
                />
              ))}
            </div>
          </>
        )
      )}
    </>
  )
}

export default CardContainer
