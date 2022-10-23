import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { selectedNameState } from '../../store/review'
import ReactStars from 'react-rating-stars-component'
import { useGetReviewByName } from './hooks/useReview'

const RevieItems = ({ item, productDetails }: any) => {
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const reviewItems = useRecoilValue(selectedNameState)
  const { GetReviewByNameMutate } = useGetReviewByName()

  const toggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setIsToggle(!isToggle)
  }

  useEffect(() => {
    GetReviewByNameMutate(productDetails?.data?.name)
  }, [productDetails])

  return (
    <section key={item.content} className="text-gray-600 body-font">
      <div className="container mt-2 mx-auto block">
        {reviewItems.length > 0 ? (
          <div
            className={`${
              isToggle ? 'bg-lenssisLightGray ' : ''
            } w-full flex-col flex-wrap p-8 cursor-pointer border-[2px] border-solid border-lenssisLightGray xs-max:p-4 rounded-[5px] mb-4`}
            onClick={(e) => toggleHandler(e)}
            key={item?.content}
            id={item?.content}
          >
            <div className="w-full">
              <div className="flex-col">
                <div className="flex w-full justify-between xs-max:hidden ">
                  <div className="flex gap-2 xs-max:flex-col">
                    <div className="leading-10 mr-2">{item.email}</div>
                    <ReactStars
                      value={item.rating}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      color={'#d9d9d9'}
                      edit={false}
                      size={24}
                    />
                  </div>
                  <div>2022.09.16</div>
                </div>
                <div className="xs:hidden mobile flex justify-between leading-5">
                  <div className="flex flex-col gap-[5px]">
                    <div className="text-[16px]">{item.rating}</div>
                    <div className="text-[12px]">{item.email}</div>
                    <h2 className="text-gray-900 text-lg title-font font-medium text-[16px]">
                      {item.productName}
                    </h2>
                    {item.color ? (
                      <span>
                        옵션: {item.color}/{item.graphicDiameter}/{item.period === 1 ? '1Day' : 'Monthly'}
                      </span>
                    ) : (
                      ''
                    )}
                    <div className="text-[14px]">{item.createAt}</div>
                  </div>
                  <div>
                    <img
                      src={item.reviewImageUrl ? item.reviewImageUrl : item.productImageUrl || item.imageUrl}
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>
                <div className={`${isToggle ? 'block' : 'flex justify-between gap-2'} w-full`}>
                  <div className="w-[90%] xs-max:w-full">
                    <div className="flex gap-4">
                      <h2 className="text-lenssisDeepGray text-lg title-font font-medium mb-4 xs-max:hidden">
                        {item.productName}
                      </h2>
                      {item.color ? (
                        <span>
                          옵션: {item.color}/{item.graphicDiameter}/{item.period === 1 ? '1Day' : 'Monthly'}
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                    <p className="leading-relaxed text-base flex-wrap xs-max:text-[13px] ">{item.content}</p>
                  </div>
                  <div className={`${isToggle ? 'mt-4' : 'flex-shrink-0 my-auto'} xs-max:hidden`}>
                    <img
                      src={item.reviewImageUrl ? item.reviewImageUrl : item.productImageUrl || item.imageUrl}
                      width={`${isToggle ? '275px' : '100px'}`}
                      height={`${isToggle ? '275px' : '100px'}`}
                    />
                  </div>
                  {isToggle && (
                    <div className="bg-lenssisDeepSky rounded-[5px] mt-4 px-4 py-6 text-white">
                      <div className="flex justify-between border-solid border-b-[1px] pb-1 ">
                        <div>랜시스 댓글</div>
                        <div>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 0V16" stroke="white" strokeWidth="2" />
                            <path d="M16 8L2.5332e-07 8" stroke="white" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="py-2">
                        구매해주셔서 감사합니다 고객님 :) <br />
                        랜시스 렌즈에 앞으로도 많은 관심 부탁드려요!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">리뷰가 존재하지 않습니다.</div>
        )}
      </div>
    </section>
  )
}

export default RevieItems
