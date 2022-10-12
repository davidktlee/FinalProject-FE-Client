import { useEffect, useState } from 'react'
import Card from '../common/Card'
import { CardContainerPropsType, ProductPropsType, ProductResponseType } from './types/productTypes'
import Pagination from './common/Pagination'
import { useGetNewProduct, useGetProductsList } from './hooks/useProductLists'
import { getFavorite } from './hooks/useFavorite'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { mainCartId } from '../../store/mainCart'
import { ProductMainSkeleton, ProductNewSkeleton } from '../common/ui/Skeleton'
import { filteredProudcts } from '../../store/filterVallue'

const CardContainer = ({ data }: CardContainerPropsType) => {
  const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  const [filteredProductCurrentPage, setFilteredProductCurrentPage] = useState(1)
  const [currentPost, setCurrentPost] = useState([])
  const indexOfLast = newProductCurrentPage * 8
  const indexOfStart = indexOfLast - 8

  const setFavoriteIds = useSetRecoilState(mainCartId)

  // 필터링된 상품 리스트입니다.
  const filteredProducts = useRecoilValue(filteredProudcts)

  const { data: productLists, isFetching: allProductFetching } = useGetProductsList(allProductCurrentPage)
  const { data: newProductLists, isFetching: newProductFetching } = useGetNewProduct()
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

  useEffect(() => {
    setCurrentPost(newProductLists?.productData?.slice(indexOfStart, indexOfLast))
  }, [newProductLists, newProductCurrentPage])

  return (
    <>
      {data === 'Best' ? (
        <>
          <div className="flex justify-center">
            <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px] ">
            {allProductFetching ? (
              <ProductMainSkeleton count={9} />
            ) : (
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
                ))
            )}
          </div>
          {productLists[0] && (
            <Pagination
              currentPage={allProductCurrentPage}
              setCurrentPage={setAllProductCurrentPage}
              allCount={productLists[0].totalCount}
              divide={9}
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
            {newProductFetching ? (
              <ProductNewSkeleton count={8} />
            ) : (
              currentPost &&
              currentPost?.map((item: ProductPropsType, idx: number) => (
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
              ))
            )}
          </div>
          {newProductLists.totalCount && (
            <Pagination
              currentPage={newProductCurrentPage}
              setCurrentPage={setNewProductCurrentPage}
              allCount={newProductLists.totalCount}
              divide={8}
            />
          )}
        </>
      ) : data && data === 'Products' ? (
        <>
          <div className="flex justify-center ">
            <span className=" h-[45px] text-center font-[600] px-2 text-[18px] md:text-[24px] mt-[20px] mb-[50px] border-b-[5px] border-solid border-[#1B304A]">
              {data}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-center xl:grid-cols-4 w-[98%] md:w-[96%] mx-auto  md:gap-x-[12px]">
            {filteredProducts.productData?.slice(0, 9).map((item: any, idx: number) => (
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
          {filteredProducts.totalCount && (
            <Pagination
              currentPage={filteredProductCurrentPage}
              setCurrentPage={setFilteredProductCurrentPage}
              allCount={filteredProducts.totalCount}
              divide={8}
            />
          )}
        </>
      ) : null}
    </>
  )
}

export default CardContainer
