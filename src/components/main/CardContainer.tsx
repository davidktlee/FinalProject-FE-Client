import { useEffect, useState } from 'react'
import Card from '../common/Card'
import { CardContainerPropsType, ProductPropsType, ProductResponseType } from './types/productTypes'
import Pagination from './common/Pagination'

import { useGetProductsList } from './hooks/useProductLists'
import { getFavorite } from './hooks/useFavorite'
import { useSetRecoilState } from 'recoil'
import { mainCartId } from '../../store/mainCart'
import axios from 'axios'

// Pagination 부분 수정해야 함

const CardContainer = ({ data }: CardContainerPropsType) => {
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  const [title, setTitle] = useState<string>('Best')
  const setFavoriteIds = useSetRecoilState(mainCartId)

  const [productLists, setProductLists] = useState<any>([])
  const getProductList = async () => {
    const res = await axios.get('https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products')
    setProductLists(res.data)
  }
  // const productLists = useGetProductsList(allProductCurrentPage)

  const useGetFavorite = async () => {
    const res = await getFavorite()
    const filteredItem = res.map((item) => {
      return item.productInfo.productId
    })
    setFavoriteIds(filteredItem)
  }

  useEffect(() => {
    useGetFavorite()
    getProductList()
  }, [])

  return (
    <>
      {data === 'Best' ? (
        <>
          <div className="flex justify-center">
            <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
              {title}
            </span>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px] ">
            {productLists &&
              productLists
                .slice(0, 9)
                .map((item: ProductResponseType, idx: number) => (
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
      ) : data && data === 'New' ? (
        <>
          <div className="flex justify-center ">
            <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px]">
            {productLists &&
              productLists
                .slice(0, 8)
                .map((item: ProductPropsType, idx: number) => (
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
      ) : null}
    </>
  )
}

export default CardContainer
