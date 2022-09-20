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
    salePrice: '800円',
    img: '/assets/logo.svg'
  },
  {
    id: '2',
    title: '샌드 플러스 그레이',
    rank: '2',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/logo.svg'
  },
  {
    id: '3',
    title: '샌드 플러스 그레이',
    rank: '3',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/logo.svg'
  },
  {
    id: '4',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/logo.svg'
  },
  {
    id: '5',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/logo.svg'
  },
  {
    id: '6',
    title: '샌드 플러스 그레이',
    rank: '0',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/logo.svg'
  }
]
interface Item {
  id: string
  title: string
  rank: string
  series: string
  price: string
  tag: string[]
  salePrice: string
  img: string
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
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4">
            {items.map((item: Item) => (
              <Card
                key={item.id}
                title={item.title}
                rank={item.rank}
                id={item.id}
                series={item.series}
                price={item.price}
                tag={item.tag}
                salePrice={item.salePrice}
                img={item.img}
              />
            ))}
          </div>
        </>
      ) : data === 'product' ? (
        <>
          <div className="flex justify-center">
            <span className="py-2 text-center font-[600] text-[24px] my-10 border-b-[6px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-2 mx-auto  ">
            {items.map((item: Item) => (
              <Card
                key={item.id}
                title={item.title}
                rank={item.rank}
                id={item.id}
                series={item.series}
                price={item.price}
                tag={item.tag}
                salePrice={item.salePrice}
                img={item.img}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  )
}

export default CardContainer
