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

const CardContainer = () => {
  return (
    <div className="">
      <h2 className="m-2">(받아온 데이터리스트 종류 rank | new)</h2>
      {/* newData 면 <div className="grid grid-col-2 xl:grid-col-4 gap-2"></div> */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
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
    </div>
  )
}

export default CardContainer
