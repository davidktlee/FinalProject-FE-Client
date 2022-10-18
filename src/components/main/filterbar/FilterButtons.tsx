import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { filteredProudcts, filterState, FilterValue } from '../../../store/filterVallue'
import ReactTooltip from 'react-tooltip'
import { contentTypes } from './FilterButtonFunction'
import { axiosInstance } from '../../axiosinstance'
import { useMutation } from 'react-query'
import { useUser } from '../../auth/hooks/useUser'

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
  const { user } = useUser()
  const [filter, setFilter] = useRecoilState(filterState)
  const setFilteredProducts = useSetRecoilState(filteredProudcts)

  const requestFilterOptions = async (filter: FilterValue) => {
    const data = await axiosInstance({
      method: 'POST',
      url: '/product/byOption',
      params: user?.memberId ? { memberId: user.memberId } : { memberId: 0 },
      data: {
        colorCode: filter.colorState,
        feature: filter.featureState,
        graphicDiameter: filter.graphicDiameterState,
        period: filter.periodState,
        series: filter.seriesState
      }
    })
    return data
  }

  const { data, mutate: requstFilter } = useMutation((filter: FilterValue) => requestFilterOptions(filter), {
    mutationKey: 'filterOptions',
    onMutate: (filter) => {
      filter.periodState.length === 0
    },
    onSuccess: ({ data }) => {
      setFilteredProducts(data.data)
    },
    onError: (error) => {}
  })
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
        break
      case 'color':
        if (typeof content.value === 'string' || typeof content.value === 'number') return
        // 교집합이 있을때
        if (content.value.filter((item: string) => filter.colorState.includes(item)).length > 0) {
          setFilter({
            ...filter,
            colorState: filter.colorState.filter((item) => !content.value.includes(item)) // 차집합
          })
        } else {
          setFilter({
            ...filter,
            colorState: [...filter.colorState, ...content.value]
          })
        }
        break
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
        break
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
        break
      default:
        break
    }
  }

  const handleFilter = (filter: FilterValue) => {
    if (filter.periodState.length === 0) return
    requstFilter(filter)
  }

  useEffect(() => {
    handleFilter(filter)
  }, [filter])

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
