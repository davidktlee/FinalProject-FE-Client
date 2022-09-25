import React from 'react'
import { useRecoilState } from 'recoil'
import { filterValueState } from '../../../../store/filterVallue'

type MobileBoxLayoutProps = {
  title: string
  contents: string[] | number[] | any
  px?: string
  py?: string
  w?: string
  h?: string
  gapX?: number
  gapY?: number
}

const MobileBoxLayout = ({ title, contents, px, py, w, h, gapX, gapY }: MobileBoxLayoutProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState)

  const handleFilterValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}

  return (
    <div>
      <div className="flex justify-between py-[12px] px-[15px]">
        <div className="font-bold text-[16px] text-lenssisDark">{title}</div>
        <div className={`flex gap-x-${gapX || 2} gap-y-${gapY || 2} w-[264px] flex-wrap`}>
          {contents.map((content: string | number | any, index: number) => (
            <button
              key={index}
              className={`font-medium border-solid border-lenssisStroke leading-6 border-[1px] rounded-[20px] text-center text-[14px] text-lenssisDeepGray px-[${px}] py-[${py}] w-[${w}] h-[${
                h || 'auto'
              }]`}
              style={content.color && { backgroundColor: `${content.color}` }}
              value={content}
              onClick={handleFilterValue}
            >
              {content.color ? '' : content}
            </button>
          ))}
        </div>
      </div>
      <div className="divider h-[1px] bg-lenssisStroke xs-max:mb-0 w-[92%] mx-auto"></div>
    </div>
  )
}

export default MobileBoxLayout
