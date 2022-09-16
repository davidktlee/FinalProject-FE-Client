import React from 'react'
import { useLocation } from 'react-router'
interface PropTypes {
  id: string
  label: string
  series: string
  price: string
  tag: string[]
  salePrice: string
  img: string
}

const Card = ({ label, id, series, price, tag, salePrice, img }: PropTypes) => {
  const location = useLocation()

  return (
    <>
      <div
        key={id}
        className="relative flex flex-col ml-[20px] md:ml-[11px]  md:w-[260px] md:h-[305px] md:my-[40px]"
      >
        {/* 순위 라벨 */}
        <span className="absolute md:top-2 md:left-4 w-4 h-4 border-2 border-solid">
          <img src="" alt="" />
        </span>
        <img src={img} alt="" className="w-[172px] h-[128px] rounded-md md:w-[260px] md:h-[185px] " />
        <div className=" flex flex-col">
          <div className="text-[11px] md:text-[12px] text-[#7A7A7A] mt-[10px] mb-[4px]">{series}</div>
          <div className=" text-[12px] md:text-[14px]">{label}</div>
          <div className="flex justify-start items-center mt-[10px] mb-[18px]">
            <div className="md:mr-4 font-[700]">{price}</div>
            <div className="text-[#7A7A7A] line-through text-[12px]">{salePrice}</div>
          </div>
          <div className="flex justify-start">
            <span className="">
              {tag.map((item: string) => (
                <span className="md:mr-[7px] md:px-[9px] md:py-[4px] whitespace-nowrap text-[11px] rounded-md border-2 border-solid">
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
