import React from 'react'
import { useLocation } from 'react-router'
import { rankColor } from './../../constants/cardColors'

interface PropTypes {
  id: string
  title: string
  rank: string
  series: string
  price: string
  tag: string[]
  salePrice: string
  img: string
}

const Card = ({ title, id, rank, series, price, tag, salePrice, img }: PropTypes) => {
  const location = useLocation()

  return (
    <>
      <div
        key={id}
        className="relative flex flex-col ml-[20px] xl:ml-[11px]  xl:w-[260px] xl:h-[305px] xl:my-[40px] "
      >
        {/* 순위 라벨/ 순위 라벨 값이 1일 때 ? 3일 때 ? : 아닐 때 */}
        {+rank > 0 ? (
          <span className="absolute xl:top-2 xl:left-4 w-4 h-4">
            <span className="absolute top-2 left-[12px] xl:top-[4px] xl:left-[14px] text-white font-bold">
              {rank}
            </span>
            <svg width="39" height="49" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            {/* <img className="" src="/assets/Bookmark.svg" alt="" style={{ color: rankColor[rank] }} /> */}
          </span>
        ) : null}

        <img
          src={img}
          alt=""
          className="w-[172px] h-[128px] rounded-xl md:w-[260px] md:h-[185px] border-2 border-solid"
        />
        <div className=" flex flex-col">
          <div className="text-[11px] xl:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px]">{series}</div>
          <div className=" text-[12px] xl:text-[14px]">{title}</div>
          <div className="flex justify-start items-center mt-[10px] mb-[18px]">
            <div className="xl:mr-4 font-[700]">{price}</div>
            <div className="text-[#7A7A7A] line-through text-[12px]">{salePrice}</div>
          </div>
          <div className="flex justify-start">{/* tag 들어 갈 부분   */}</div>
        </div>
      </div>
    </>
  )
}

export default Card

{
  /* <span className="xl:mr-[7px] xl:px-[9px] xl:py-[4px] whitespace-nowrap text-[11px] rounded-xl border-2 border-solid border-[#F2C200]">
  {tag[0]}
</span>
<span className="xl:mr-[7px] xl:px-[9px] xl:py-[4px] whitespace-nowrap text-[11px] rounded-xl border-2 border-solid border-[#DADADA]">
  {tag[1]}
</span>
<span className="xl:mr-[7px] xl:px-[9px] xl:py-[4px] whitespace-nowrap text-[11px] rounded-xl border-2 border-solid border-[#FFAE4F]">
  {tag[2]}
</span>
<span className="xl:mr-[7px] xl:px-[9px] xl:py-[4px] whitespace-nowrap text-[11px] rounded-xl border-2 border-solid border-[#FC6D6D ]">
  {tag[3]}
</span> */
}
