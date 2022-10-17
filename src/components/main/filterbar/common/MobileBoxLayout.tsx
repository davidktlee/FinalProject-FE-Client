import { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { filteredProudcts, filterState, FilterValue } from '../../../../store/filterVallue'
import { useUser } from '../../../auth/hooks/useUser'
import { axiosInstance } from '../../../axiosinstance'
import { contentTypes } from '../FilterButtonFunction'

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

const MobileBoxLayout = ({ title, contents, px, py, w, h, gapX, gapY }: MobileBoxLayoutProps) => {
  const { user } = useUser()
  const [filter, setFilter] = useRecoilState(filterState)
  const setFilteredProducts = useSetRecoilState(filteredProudcts)

  const requestFilterOptions = async (filter: FilterValue) => {
    console.log(filter)
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
      console.log('필터가 적용되었습니다.')
      setFilteredProducts(data.data)
      console.log(data)
    },
    onError: (error) => {
      console.log('필터가 적용에 실패했습니다.')
      console.log(error)
    }
  })

  const handleFilterValue = (content: contentTypes) => {
    switch (content.type) {
      case 'period':
        console.log(content.value)
        if (filter.periodState[1] === Number(content.value[0])) {
          setFilter({
            ...filter,
            periodState: filter.periodState.filter((item) => item == Number(content.value[0]))
          })
        }
        if (filter.periodState[0] === Number(content.value[0])) {
          setFilter({
            ...filter,
            periodState: filter.periodState.filter((item) => item == Number(content.value[0]))
          })
        } else {
          setFilter({
            ...filter,
            periodState:
              [...content.value].length === 2 ? [...content.value.map(Number)] : [Number(content.value[0])]
          })
        }
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

  useEffect(() => {}, [filter])

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
              className={`font-medium border-solid border-[1px] rounded-[20px] text-center text-[12px]
              ${w} ${h} ${px} ${py}
              ${
                filter.periodState.filter((item) => item === Number(content.value)).length > 0
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } ${
                filter.graphicDiameterState.includes(content.value)
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } ${
                filter.seriesState.includes(content.value)
                  ? 'bg-lenssisDark text-white border-lenssisDark'
                  : ''
              } ${
                filter.colorState.includes(content.value[0])
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
