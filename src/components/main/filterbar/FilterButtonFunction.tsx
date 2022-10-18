import { filterOptionState } from '../../../store/filterVallue'
import { useRecoilState } from 'recoil'

const [filter, setFilter] = useRecoilState(filterOptionState)

export type contentTypes = {
  type: string
  name: string
  value: any
  color?: string
}

export const handleFilterValue = (content: contentTypes) => {
  // if (filter[content.type].includes(content.value)) {
  //   setFilter({ ...filter, [content.type]: content.value })
  // }
  switch (content.type) {
    case 'duration':
      if (typeof content.value === 'string') {
        // setFilter({ ...filter, durationState: content.value })
      }
      console.log(filter)
      break
    case 'graphicDiameter':
      if (typeof content.value === 'number') {
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
    default:
      break
  }
}
