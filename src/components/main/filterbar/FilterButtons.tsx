import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { filterState, FilterValue } from '../../../store/filterVallue'
import ReactTooltip from 'react-tooltip'
import { graphicDiameter } from '../../../constants/filterData'
import { contentTypes } from './FilterButtonFunction'
import { axiosInstance } from '../../axiosinstance'

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
  const [filter, setFilter] = useRecoilState(filterState)

  const requestFilterOptions = (filter: FilterValue) => {
    const data = axiosInstance({
      method: 'POST',
      url: '/product/byOption',
      data: {
        colorCode: filter.colorState,
        feature: filter.featureState,
        graphicDiameter: filter.graphicDiameterState,
        period: filter.periodState,
        series: filter.seriesState
      }
    })
  }

  // const data = useMutation()

  const handleFilterValue = (content: contentTypes) => {
    switch (content.type) {
      case 'graphicDiameter':
        if (typeof content.value === 'number') {
          if (filter.graphicDiameterState.includes(content.value)) {
            setFilter({
              ...filter,
              graphicDiameterState: filter.graphicDiameterState.filter(
                (item: number) => item !== content.value
              )
            })
          } else {
            setFilter({
              ...filter,
              graphicDiameterState: [...filter.graphicDiameterState, content.value]
            })
          }
        }
        console.log(filter.graphicDiameterState)
        break
      case 'color':
        if (typeof content.value === 'string' || typeof content.value === 'number') return

        if (filter.colorState.includes(content.value[0])) {
          setFilter({
            ...filter,
            colorState: []
          })
        } else {
          setFilter({
            ...filter,
            colorState: content.value
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
        <div key={i}>
          <button
            className={`
          ${w} ${h} ${px} ${py} ${gapX} ${gapY}
          justify-center
          flex font-medium border-solid box-border leading-6 border-[1px] rounded-[20px] text-center text-[12px]  ${
            filter.graphicDiameterState.includes(content.value)
              ? 'bg-lenssisDark text-white border-lenssisDark'
              : ''
          } ${
              filter.seriesState.includes(content.value) ? 'bg-lenssisDark text-white border-lenssisDark' : ''
            } ${
              filter.colorState.includes(content.value[0])
                ? 'border-solid box-border border-[2px] border-lenssisDark'
                : 'border-lenssisStroke border-[1px]'
            } ${
              filter.featureState.includes(content.value)
                ? 'bg-lenssisDark text-white border-lenssisDark'
                : ''
            }`}
            style={
              content.color && {
                backgroundColor: `${content.color}`,
                width: '32px',
                height: '31px',
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
