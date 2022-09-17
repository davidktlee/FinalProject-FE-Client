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
        <span className="absolute xl:top-2 xl:left-4 w-4 h-4">
          <span className="absolute xl:top-0.8 xl:left-2 text-white font-bold">
            {Number(rank) > 0 ? rank : null}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={rankColor[rank]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
              stroke="current"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* <img className="" src="/assets/Bookmark.svg" alt="" style={{ color: rankColor[rank] }} /> */}
        </span>
        <img
          src={img}
          alt=""
          className="w-[172px] h-[128px] rounded-xl xl:w-[260px] xl:h-[185px] border-2 border-solid"
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
