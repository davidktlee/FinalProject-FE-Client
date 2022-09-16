import React from 'react'
import Card from '../common/Card'
const items = [
  {
    id: '1',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  },
  {
    id: '2',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  },
  {
    id: '3',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  },
  {
    id: '4',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  },
  {
    id: '5',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  },
  {
    id: '6',
    label: '샌드 플러스 그레이',
    series: '샌드',
    price: '1000円',
    tag: ['uv차단', '13.5', '인기상품', '추천상품'],
    salePrice: '800円',
    img: '/assets/KakaoTalk_20220523_141914763.jpg'
  }
]
interface Item {
  id: string
  label: string
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((item: Item) => (
          <Card
            label={item.label}
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
