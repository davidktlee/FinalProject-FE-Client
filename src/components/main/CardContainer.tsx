import React, { useEffect, useState } from 'react'
import Card from '../common/Card'
import { Item, CardContainerPropsType } from './types/productTypes'
import Pagination from './common/Pagination'
import { useQuery } from 'react-query'
import { axiosInstance } from '../axiosinstance'
import { queryKeys } from '../react-query/queryKeys'

// Pagination 부분 수정해야 함

const CardContainer = ({ data }: CardContainerPropsType) => {
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)

  const getProduct = async (pageNo: number) => {
    const res = await axiosInstance({
      url: `https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products?page=${pageNo}&limit=9`
    })
    return res.data
  }
  // const productLists = useGetProductsList(allProductCurrentPage)
  // console.log(productLists)
  useEffect(() => {}, [])
  const { data: productLists } = useQuery(
    [queryKeys.product, allProductCurrentPage],
    () => getProduct(allProductCurrentPage),
    {
      refetchOnWindowFocus: false
    }
  )

  return (
    <>
      {data === 'New' ? (
        <>
          <div className="flex justify-center">
            <span className=" text-center font-[600] text-[18px] md:text-[24px] mt-[25px] mb-[30px] md:mb-[50px] border-b-[6px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[95%] mx-auto">
            {productLists &&
              productLists.map((item: Item, idx: number) => (
                <Card
                  key={`${item.productId}-${idx}`}
                  idx={idx}
                  id={item.productId}
                  name={item.name}
                  series={item.series}
                  price={item.details.price}
                  discount={item.details.discount}
                  diameter={item.diameter}
                  colorCode={item.details.color_code}
                  productImg={item.details.product_details_image_url}
                  graphicDiameter={item.details.graphicDiameter}
                />
              ))}
          </div>
          <Pagination
            currentPage={newProductCurrentPage}
            setCurrentPage={setNewProductCurrentPage}
            allCount={30}
          />
        </>
      ) : (
        data === 'Best' && (
          <>
            <div className="flex justify-center">
              <span className="text-center font-[600] text-[18px] md:text-[24px] mt-[25px] mb-[30px] md:mb-[50px] border-b-[6px] border-solid border-[#1B304A]">
                {data}
              </span>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[95%] mx-auto gap-x-[20px]">
              {productLists &&
                productLists.map((item: Item, idx: number) => (
                  <Card
                    key={`${item.productId}-${idx}`}
                    idx={idx}
                    id={item.productId}
                    name={item.name}
                    series={item.series}
                    price={item.details.price}
                    discount={item.details.discount}
                    diameter={item.diameter}
                    colorCode={item.details.color_code}
                    productImg={item.details.product_details_image_url}
                    graphicDiameter={item.details.graphicDiameter}
                  />
                ))}
            </div>
            <Pagination
              currentPage={allProductCurrentPage}
              setCurrentPage={setAllProductCurrentPage}
              allCount={40}
            />
          </>
        )
      )}
    </>
  )
}

export default CardContainer
