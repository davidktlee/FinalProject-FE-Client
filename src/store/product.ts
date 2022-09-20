import { atom } from "recoil";

export interface Product {
  id:number;
  imageURL:string;
  lensTitle:string
  lensColor:string
  option:string[]
  price:string
  orderedAt:string
  orderNumber:number
}

export const productState = atom<Product[]>({
  key: 'productState',
  default: 
  [
    {
      id:1,
      imageURL:'/assets/eyes.png',
      lensTitle:'랜시스',
      lensColor:'올리브',
      option:['그래픽 직경 13.5mm','도수: 0.7','수량: 1개'],
      price: '18000원',
      orderedAt:'2022-05-17',
      orderNumber:1024214524
    },
    {
      id:2,
      imageURL:'/assets/eyes.png',
      lensTitle:'샌드',
      lensColor:'베이지',
      option:['그래픽 직경 13.2mm','도수: 0.4','수량: 2개'],
      price: '36000원',
      orderedAt:'2022-03-24',
      orderNumber:103133324
    },
    {
      id:3,
      imageURL:'/assets/eyes.png',
      lensTitle:'에일린',
      lensColor:'레드',
      option:['그래픽 직경 12.3mm','도수: 0.5','수량: 1개'],
      price: '18000원',
      orderedAt:'2022-09-01',
      orderNumber:1024214524
    },
    
  ]
})
