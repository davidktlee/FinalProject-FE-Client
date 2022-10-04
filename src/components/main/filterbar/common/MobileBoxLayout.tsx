import React from 'react'
import { useRecoilState } from 'recoil'
import { filterState } from '../../../../store/filterVallue'

type MobileBoxLayoutProps = {
  title: string
  contents: string[] | number[] | any[]
  px?: string
  py?: string
  w?: string
  h?: string
  gapX?: number | string
  gapY?: number | string
}

type contentTypes = {
  type: string
  value: string | number
  color: string
}

const MobileBoxLayout = ({ title, contents, px, py, w, h, gapX, gapY }: MobileBoxLayoutProps) => {
  const [filter, setFilter] = useRecoilState(filterState)

  const handleFilterValue = (content: contentTypes) => {
    switch (content.type) {
      case 'duration':
        if (typeof content.value === 'string') {
          setFilter({ ...filter, durationState: content.value })
        }
        console.log(filter)
        break
      case 'graphicDiameter':
        if (typeof content.value === 'string') return
        if (filter.graphicDiameterState.includes(content.value)) {
          setFilter({
            ...filter,
            graphicDiameterState: filter.graphicDiameterState.filter((item: number) => item !== content.value)
          })
        } else {
          setFilter({
            ...filter,
            graphicDiameterState: [...filter.graphicDiameterState, content.value]
          })
        }
        console.log(filter.graphicDiameterState)
        break
      case 'color':
        if (typeof content.color === 'undefined') return
        if (filter.colorState.includes(content.color)) {
          setFilter({
            ...filter,
            colorState: filter.colorState.filter((item: string) => item !== content.color)
          })
        } else {
          setFilter({
            ...filter,
            colorState: [...filter.colorState, content.color]
          })
        }
        console.log(filter.colorState)
      case 'series':
        if (typeof content.value !== 'string') return
        if (filter.seriesState.includes(content.value)) {
          setFilter({
            ...filter,
            seriesState: filter.seriesState.filter((item: string) => item !== content.value)
          })
        } else {
          setFilter({
            ...filter,
            seriesState: [...filter.seriesState, content.value]
          })
        }
        console.log(filter.seriesState)
      case 'feature':
        if (typeof content.value !== 'string') return
        if (filter.featureState.includes(content.value)) {
          setFilter({
            ...filter,
            featureState: filter.featureState.filter((item: string) => item !== content.value)
          })
        } else {
          setFilter({
            ...filter,
            featureState: [...filter.featureState, content.value]
          })
        }
        console.log(filter.featureState)
      default:
        break
    }
  }

  return (
    <div>
      <div className="flex justify-between py-[12px] px-[15px]">
        <div className="font-bold text-[16px] text-lenssisDark">{title}</div>
        <div
          className={`flex ${gapX} ${gapY} w-[264px] flex-wrap text-lenssisDeepGray`}
          style={{ columnGap: `${gapX ? `${gapX}` : '8px'}`, rowGap: `${gapY ? `${gapY}` : '8px'}` }}
        >
          {contents.map((content: string | number | any, index: number) => (
            <button
              key={index}
              className={`font-medium border-solid border-[1px] rounded-[20px] text-center text-[14px]
              ${w} ${h} ${px} ${py}
              ${
                filter.durationState === content.value ? 'bg-lenssisDark text-white border-lenssisDark' : ''
              } ${
                filter.graphicDiameterState.includes(content.value)
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } ${
                filter.seriesState.includes(content.value)
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } ${
                filter.colorState.includes(content.color)
                  ? 'border-solid border-[3px] border-lenssisDark'
                  : 'border-lenssisStroke'
              } ${
                filter.featureState.includes(content.value)
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              }`}
              style={content.color && { backgroundColor: `${content.color}`, width: '25px' }}
              onClick={() => handleFilterValue(content)}
            >
              {content.color ? '' : content.name}
            </button>
          ))}
        </div>
      </div>
      <div className="divider h-[1px] bg-lenssisStroke xs-max:mb-0 w-[92%] mx-auto"></div>
    </div>
  )
}

export default MobileBoxLayout
