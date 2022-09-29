import { atom } from "recoil";



export interface Review {
  createdAt:string
  orderNumber:number
  imageURL:string;
  lensTitle:string
  lensColor:string;
  lensOption:string[];
  lensPrice:string;
  content:string;
  lensRating:number;
}

export const reviewState = atom<Review[]>({
  key: 'review',
  default: [{
    createdAt:"2022-09-25",
  orderNumber:242324345,
  imageURL:"/assets/eyes.png",
  lensTitle:'샌드',
  lensColor:'샌드 베이지',
  lensOption:["그래픽 직경: 13.5mm","도수: 0.7","수량: 1개"],
  lensPrice:'1800엔',
  content:'너무 이뻐요! 앞으로 렌즈 유목민 생활은 끝 <3 ...',
  lensRating:5,
  }]
})
