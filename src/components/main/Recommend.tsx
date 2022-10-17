import { useEffect, useState } from 'react'
import { RecommendSkeleton } from '../common/ui/Skeleton'
import { useGetRecommendProduct } from './hooks/useRecommend'

import RecommendBanner from './recommend/RecommendBanner'

const Recommend = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth)
  }, [])
  setTimeout(() => {
    setIsLoading(true)
  }, 2000)
  const { data: recommendProductLists, isFetching } = useGetRecommendProduct()
  return (
    <div>
      <div className="flex justify-center items-center text-[24px]  ">
        <span className="px-2 h-[45px] border-b-[5px] border-solid border-[#1B304A] text-[18px] md:text-[24px] mt-[20px] mb-[40px] font-[600] hover:cursor-pointer">
          Recommend
        </span>
      </div>
      <div className="flex">
        {isFetching ? (
          windowWidth > 440 ? (
            <RecommendSkeleton count={4} />
          ) : (
            <RecommendSkeleton count={2} />
          )
        ) : (
          <RecommendBanner recommendProductLists={recommendProductLists} />
        )}
      </div>
    </div>
  )
}

export default Recommend
