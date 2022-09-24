import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CartAndHeart from './CartAndHeart'
import { SubtractIcon } from './util/Icon'
import { colors } from './../../constants/filterData'

interface PropTypes {
  id: string // 상품 id
  idx: number
  title: string // 상품 타이틀
  rank?: string // 상품 순위
  series: string // 상품 시리즈
  price: string // 상품 가격
  tag?: string[] // 상품 밑 태그
  discount?: string // 할인률
  img?: string // 상품 이미지
  color?: string[] // 색상 코드
  colorImg: string[]
}

const Card = ({ title, idx, id, rank, series, price, tag, discount, img, color, colorImg }: PropTypes) => {
  /* recommend에 대한 Card 디자인 */
  const [viewImg, setViewImg] = useState<string | undefined>(colorImg[0])

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  const mouseEnterHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    setViewImg(colorImg?.find((_, imgIdx: number) => idx === imgIdx))
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])
  // 첫 번째 인덱스
  return (
    <>
      <div key={id} className={`relative w-[160px] md:w-[260px] mx-auto my-[40px]`}>
        {/* 순위 라벨/ 순위 라벨 값이 1일 때 ? 3일 때 ? : 아닐 때 */}
        {idx < 3 ? (
          <>
            <span className="absolute top-[4px] left-[4px] md:left-2 xl:w-4 xl:h-4">
              {windowWidth < 1020 ? (
                <>
                  <span className="absolute top-[4px] left-[8px] md:top-[3px]  text-white text-[10px] md:text-[17px] font-bold  xl:font-bold ">
                    {idx + 1}
                  </span>
                  {idx === 0 ? (
                    <SubtractIcon width={24} height={34} color="#1B304A" />
                  ) : (
                    <SubtractIcon width={24} height={34} color="#FFDF5D" />
                  )}
                </>
              ) : (
                <>
                  <span className="absolute top-[4px] left-[13px] text-white text-[10px] md:text-[17px] lg:font-bold  xl:font-bold ">
                    {rank}
                  </span>
                  {idx === 0 ? (
                    <SubtractIcon width={39} height={49} color="#1B304A" />
                  ) : (
                    <SubtractIcon width={39} height={49} color="#FFDF5D" />
                  )}
                </>
              )}
            </span>
            <CartAndHeart top="200" right="2" />
          </>
        ) : (
          <></>
        )}

        <img src={viewImg} className="rounded-x w-full h-[115px] mx-auto md:h-[185px]" />
        <div className="flex flex-col ml-[20px] md:ml-[10px]">
          <div className="mt-[10px] mb-[4px] flex ">
            {color?.map((eachColor: string, idx: number) => (
              <div
                className={`md:w-[30px] md:h-[30px] md:mx-[2px] border-2 border-solid rounded-xl bg-[${eachColor}]`}
                onMouseEnter={(e) => {
                  mouseEnterHandler(e, idx)
                }}
              ></div>
            ))}
          </div>
          <div className=" text-[12px] md:text-[14px]">{title}</div>
          <div className="flex justify-start items-center mt-[10px] mb-[18px]">
            <div className="mr-2 md:mr-4 font-[700]">{price}</div>
            <div className="text-[#7A7A7A] line-through text-[12px]">{discount}</div>
          </div>
          <div className="flex justify-start">{/* tag 들어 갈 부분   */}</div>
        </div>
      </div>
    </>
  )
}
// }

export default Card
