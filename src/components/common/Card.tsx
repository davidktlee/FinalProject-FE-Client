import React, { useEffect, useState } from 'react'

interface PropTypes {
  id: string // 상품 id
  title: string // 상품 타이틀
  rank?: string // 상품 순위
  series: string // 상품 시리즈
  price: string // 상품 가격
  tag?: string[] // 상품 밑 태그
  discount?: string // 할인률
  img?: string // 상품 이미지

  color?: string[] // 색상 코드
}

const Card = ({ title, id, rank, series, price, tag, discount, img }: PropTypes) => {
  /* recommend에 대한 Card 디자인 */
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])
  // if (false /* width ==='230' */) {
  //   return <div className=""></div>
  // } else {
  return (
    <>
      <div
        key={id}
        className={`relative flex flex-col mx-[20px] xl:mx-[11px] w-[260px] h-[305px] xl:my-[40px]`}
      >
        {/* 순위 라벨/ 순위 라벨 값이 1일 때 ? 3일 때 ? : 아닐 때 */}
        {rank && +rank > 0 ? (
          <span className="absolute top-2 left-2 xl:w-4 xl:h-4">
            {windowWidth < 1020 ? (
              <>
                <span className="absolute top-[3px] left-[8px] text-white text-[12px] lg:font-bold  xl:font-bold ">
                  {rank}
                </span>

                <svg
                  width="24"
                  height="34"
                  viewBox="0 0 39 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_375_19039)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.70067 5C6.65685 5 5 6.65684 5 8.70067V39.9997L17.5021 29.0498L30 39.996V8.70067C30 6.65685 28.3432 5 26.2993 5H8.70067Z"
                      fill="#FFDF5D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_375_19039"
                      x="0.374163"
                      y="0.374163"
                      width="37.9523"
                      height="47.9521"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="1.85034" dy="1.85034" />
                      <feGaussianBlur stdDeviation="3.23809" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_375_19039" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_375_19039"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </>
            ) : (
              <>
                <span className="absolute top-[4px] left-[13px] text-white md:text-[17px] lg:text-[17px] xl:text-[17px] lg:font-bold  xl:font-bold ">
                  {rank}
                </span>
                <svg
                  width="39"
                  height="49"
                  viewBox="0 0 39 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_375_19039)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.70067 5C6.65685 5 5 6.65684 5 8.70067V39.9997L17.5021 29.0498L30 39.996V8.70067C30 6.65685 28.3432 5 26.2993 5H8.70067Z"
                      fill="#FFDF5D"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_375_19039"
                      x="0.374163"
                      y="0.374163"
                      width="37.9523"
                      height="47.9521"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="1.85034" dy="1.85034" />
                      <feGaussianBlur stdDeviation="3.23809" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_375_19039" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_375_19039"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </>
            )}
            {/* <img className="" src="/assets/Bookmark.svg" alt="" style={{ color: rankColor[rank] }} /> */}
          </span>
        ) : (
          <></>
        )}
        <img src={img} className="rounded-xl w-[260px] h-[185px]" />
        <div className=" flex flex-col">
          <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px]">{series}</div>
          <div className=" text-[12px] xl:text-[14px]">{title}</div>
          <div className="flex justify-start items-center mt-[10px] mb-[18px]">
            <div className="xl:mr-4 font-[700]">{price}</div>
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
