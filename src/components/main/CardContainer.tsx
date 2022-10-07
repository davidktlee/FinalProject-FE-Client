import { useEffect, useState } from 'react'
import Card from '../common/Card'
import { CardContainerPropsType, ProductResponseType } from './types/productTypes'
import Pagination from './common/Pagination'

import { useGetProductsList } from './hooks/useProductLists'
import { getFavorite } from './hooks/useFavorite'

// Pagination 부분 수정해야 함

const CardContainer = ({ data }: CardContainerPropsType) => {
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  const [filteredItem, setFilteredItem] = useState<[]>([])
  const productLists = useGetProductsList(allProductCurrentPage)
  console.log(productLists)

  const useGetFavorite = async () => {
    const res = await getFavorite()
    const filteredItem = res.map((item) => {
      return item.productInfo.productId
    })
    console.log(filteredItem)
  }

  useEffect(() => {
    useGetFavorite()
  }, [])

  return (
    <>
      {data === 'New' ? (
        <>
          <div className="flex justify-center ">
            <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px]">
            {productLists &&
              productLists.map((item: ProductResponseType, idx: number) => (
                <Card
                  idx={idx}
                  key={`${item.productId}-${idx}`}
                  colorAndImage={item.colorAndImage}
                  productId={item.productId}
                  series={item.series}
                  price={item.price}
                  discount={item.discount}
                  graphicDiameter={item.graphicDiameter}
                  isFavorite={item.isFavorite}
                />
              ))}
          </div>
          {productLists && (
            <Pagination
              currentPage={newProductCurrentPage}
              setCurrentPage={setNewProductCurrentPage}
              allCount={productLists.length}
            />
          )}
        </>
      ) : (
        data === 'Best' && (
          <>
            <div className="flex justify-center">
              <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
                {data}
              </span>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px] ">
              {productLists &&
                productLists.map((item: ProductResponseType, idx: number) => (
                  <Card
                    key={`${item.productId}-${idx}`}
                    idx={idx}
                    colorAndImage={item.colorAndImage}
                    productId={item.productId}
                    series={item.series}
                    price={item.price}
                    discount={item.discount}
                    graphicDiameter={item.graphicDiameter}
                    isFavorite={item.isFavorite}
                  />
                ))}
            </div>
            {productLists && (
              <Pagination
                currentPage={newProductCurrentPage}
                setCurrentPage={setNewProductCurrentPage}
                allCount={productLists.length}
              />
            )}
          </>
        )
      )}
    </>
  )
}

export default CardContainer
