import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
  durationState,
  graphicDiameterState,
  colorState,
  seriesState,
  featuresState
} from '../../../store/filterVallue'
import ReactTooltip from 'react-tooltip'

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

export type contentTypes = {
  type: string
  value: string
  color: string
}

type filterButtonTypes = {
  contents: string[] | number[] | any[]
  px?: string
  py?: string
  w?: string
  h?: string
  gapX?: number | string
  gapY?: number | string
}

const FilterButtons = ({ contents, px, py, w, h, gapX, gapY }: filterButtonTypes) => {
  const [duration, setDuration] = useRecoilState(durationState)
  const [graphicDiameter, setGraphicDiameter] = useRecoilState(graphicDiameterState)
  const [color, setColor] = useRecoilState(colorState)
  const [series, setSeries] = useRecoilState(seriesState)
  const [features, setFeatures] = useRecoilState(featuresState)

  const handleFilterValue = (content: contentTypes) => {
    switch (content.type) {
      case 'duration':
        setDuration(content?.value)
        console.log(duration)
        break
      case 'graphicDiameter':
        setGraphicDiameter((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(graphicDiameter)
        break
      case 'color':
        setColor((prev) => {
          if (prev.includes(content?.color)) {
            return prev.filter((item) => item !== content?.color)
          } else {
            return [...prev, content?.color]
          }
        })
        console.log(color)
        break
      case 'series':
        setSeries((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(series)
        break
      case 'feature':
        setFeatures((prev) => {
          if (prev.includes(content?.value)) {
            return prev.filter((item) => item !== content?.value)
          } else {
            return [...prev, content?.value]
          }
        })
        console.log(features)
        break
      default:
        break
    }
  }

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [])

  return (
    <div
      className={`${
        contents[0].color && 'gap-x-8 gap-y-4'
      } border-box flex flex-wrap py-3 gap-2 text-[14px] text-lenssisDeepGray`}
    >
      {contents.map((content: string | number | any, i: number) => (
        <div>
          <button
            key={i}
            className={`
          ${w} ${h} ${px} ${py} ${gapX} ${gapY}
          justify-center
          flex font-medium border-solid box-border leading-6 border-[1px] rounded-[20px] text-center text-[14px]  
              ${duration === content.value ? 'bg-lenssisDark text-white' : ''} ${
              graphicDiameter.includes(content.value) ? 'bg-lenssisDark text-white' : ''
            } ${series.includes(content.value) ? 'bg-lenssisDark text-white' : ''} ${
              color.includes(content.color)
                ? 'border-solid box-border border-[2px] border-lenssisDark'
                : 'border-lenssisStroke border-[2px]'
            } ${features.includes(content.value) ? 'bg-lenssisDark text-white' : ''}`}
            style={
              content.color && {
                backgroundColor: `${content.color}`,
                width: '30px',
                height: '32px',
                boxSizing: 'border-box'
              }
            }
            data-tip={content.color && content.name}
            data-for={content.color && content.color}
            onClick={() => handleFilterValue(content)}
          >
            {content.color ? '' : content.name}
          </button>
          <ReactTooltip
            className="font-bold"
            id={content.color && content.color}
            backgroundColor={content.color && content.color}
            textColor="#fff"
          />
        </div>
      ))}
    </div>
  )
}

export default FilterButtons
