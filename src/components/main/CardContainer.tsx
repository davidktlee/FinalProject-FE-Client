import { useEffect, useState } from 'react'
import Card from '../common/Card'
import { CardContainerPropsType, ProductPropsType, ProductResponseType } from './types/productTypes'
import Pagination from './common/Pagination'

import { useGetProductsList } from './hooks/useProductLists'
import { getFavorite } from './hooks/useFavorite'
import { useSetRecoilState } from 'recoil'
import { mainCartId } from '../../store/mainCart'

// Pagination 부분 수정해야 함

const CardContainer = ({ data }: CardContainerPropsType) => {
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  const [filteredItem, setFilteredItem] = useState<[]>([])
  const setFavoriteIds = useSetRecoilState(mainCartId)

  const productLists = useGetProductsList(allProductCurrentPage)

  const useGetFavorite = async () => {
    const res = await getFavorite()
    const filteredItem = res.map((item) => {
      return item.productInfo.productId
    })
    setFavoriteIds(filteredItem)
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
              productLists.map((item: ProductPropsType, idx: number) => (
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
          {productLists[0] && (
            <Pagination
              currentPage={newProductCurrentPage}
              setCurrentPage={setNewProductCurrentPage}
              allCount={productLists[0].totalCount}
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
            {productLists[0] && (
              <Pagination
                currentPage={allProductCurrentPage}
                setCurrentPage={setAllProductCurrentPage}
                allCount={productLists[0].totalCount}
              />
            )}
          </>
        )
      )}
    </>
  )
}

export default CardContainer
