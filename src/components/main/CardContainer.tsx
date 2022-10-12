import { useEffect, useState } from 'react'
import Card from '../common/Card'
import { CardContainerPropsType, ProductPropsType, ProductResponseType } from './types/productTypes'
import Pagination from './common/Pagination'
import { useGetProductsList, usePrefetchProductLists } from './hooks/useProductLists'
import { getFavorite } from './hooks/useFavorite'
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil'
import { mainCartId } from '../../store/mainCart'
import axios from 'axios'
import { ProductMainSkeleton, ProductNewSkeleton } from '../common/ui/Skeleton'
import { ProductCount } from '../../store/product'
import { AllProductCurrentPage } from './../../store/product'

const CardContainer = ({ data }: CardContainerPropsType) => {
  // const [allProductCurrentPage, setAllProductCurrentPage] = useState(1)
  // const [newProductCurrentPage, setNewProductCurrentPage] = useState(1)
  const allProductCurrentPage = useRecoilValue(AllProductCurrentPage)
  const [title, setTitle] = useState<string>('Best')
  const setFavoriteIds = useSetRecoilState(mainCartId)
  const prefetchProductCount = useRecoilValue(ProductCount)

  const [isLoading, setIsLoading] = useState(false)
  // const [productLists, setProductLists] = useState<any>([])
  // const getProductList = async () => {
  //   setIsLoading(true)
  //   const res = await axios.get('https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products')
  //   setProductLists(res.data)
  //   setIsLoading(false)
  // }
  const { data: productLists, isFetching: allProductFetching } = useGetProductsList(allProductCurrentPage)

  const useGetFavorite = async () => {
    const res = await getFavorite()
    const filteredItem = res.map((item) => {
      return item.productInfo.productId
    })
    setFavoriteIds(filteredItem)
  }

  useEffect(() => {
    
    useGetFavorite()
    // getProductList()
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
            {allProductFetching ? (
              <ProductMainSkeleton count={prefetchProductCount} />
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
              // currentPage={allProductCurrentPage}
              // setCurrentPage={setAllProductCurrentPage}
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
            {isLoading ? (
              <ProductNewSkeleton count={prefetchProductCount} />
            ) : (
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
                ))
            )}
          </div>
          {productLists[0] && (
            <Pagination
              // currentPage={allProductCurrentPage}
              // setCurrentPage={setAllProductCurrentPage}
              allCount={productLists[0].totalCount}
              divide={8}
            />
          )}
        </>
      ) : null}
    </>
  )
}

export default CardContainer
