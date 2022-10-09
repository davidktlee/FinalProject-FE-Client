import { graphicDiameter } from '../../constants/filterData'
import Heart from '/assets/Heart.svg'
import FillHeart from '/assets/FillHeart.svg'
import { useParams } from 'react-router'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { mainCartModal } from '../../store/mainCart'
// import { useProductDetails } from './hooks/useProductDetails'
import { ProductDetailResponseType } from '../main/types/productTypes'
import { useEffect, useState } from 'react'
import { useAddFavorite } from '../main/hooks/useFavorite'

interface PropsType {
  isClose?: boolean
  productDetails?: ProductDetailResponseType
}

const ProductInfo = ({ isClose, productDetails }: PropsType) => {
  const [commaPrice, setCommaPrice] = useState({
    price: '',
    discount: ''
  })

  const setModalState = useSetRecoilState(mainCartModal)

  const toComma = () => {
    const addCommaPrice = productDetails?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let addCommaDiscount: string | number = (
      productDetails?.price! *
      (1 - productDetails?.discount! / 100)
    ).toFixed(0)
    addCommaDiscount = addCommaDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setCommaPrice({ ...commaPrice, price: addCommaDiscount, discount: addCommaPrice! })
  }
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/assets/noImage.jpeg'
  }
  const addFavor = useAddFavorite()
  const addFavorHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const productId = Number(e.currentTarget.value)

    addFavor(productId)
  }

  useEffect(() => {
    toComma()
  }, [productDetails?.price])

  return (
    <section className="text-gray-600 body-font overflow-hidden relative">
      {isClose && (
        <img
          className="absolute top-[195px] right-[20px] font-bold z-[99999] hover:cursor-pointer"
          onClick={() => setModalState(false)}
          onError={(e) => handleImgError(e)}
          src={'/assets/close.png'}
        />
      )}
      <div className="container pt-44 pb-10 mx-auto ">
        <div className="max-w-[1180px] lg:w-full mx-auto flex flex-wrap drop-shadow-basic rounded-[10px] p-8 xs-max:w-[95%] xs-max:px-[18px] bg-white ">
          <div className="md:flex-row lg:flex-col lg:w-1/2 w-full lg:h-auto flex flex-col gap-4">
            <h2 className="xs:hidden text-center text-[20px] text-lenssisDark font-bold">상품상세</h2>
            <img
              alt="ecommerce"
              className="object-cover object-center rounded mx-auto xs-max:w-[320px] xs-max:h-[315px]"
              src={productDetails?.mainImageUrl}
              width="465"
              height="460"
              onError={(e) => handleImgError(e)}
            />
            <div className="overflow-auto flex xs:justify-between sm:justify-center md:justify-between lg:justify-between gap-3 md:mx-auto md:flex-col lg:gap-[14px] lg:flex-row xl:w-[460px] xl:mx-auto xl:gap-[14.2px] xs-max:w-[320px] xs-max:mx-auto xs-max:gap-2">
              {productDetails?.subMainImageUrlList.map((image) => (
                <img
                  key={image}
                  onError={(e) => handleImgError(e)}
                  className="rounded xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"
                  src={image}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-lenssisGray mb-2 text-[12px]">60개의 리뷰 &gt;</h2>
            <div className="text-gray-900 text-3xl title-font font-medium mb-2 flex justify-between">
              <span className="">{productDetails?.name}</span>
              <button onClick={(e) => addFavorHandler(e)} value={productDetails?.productId}>
                {productDetails?.isFavorite ? (
                  <img src={FillHeart} width={35} height={35} alt="찬 하트" />
                ) : (
                  <img width={35} height={35} src={Heart} alt="빈 하트" />
                )}
              </button>
            </div>
            <div className="leading-relaxed text-[14px]">
              <div className="price flex">
                <div className="text-xl font-bold text-black">{commaPrice.price}円</div>
                <p className="ml-4 leading-7">{commaPrice.discount}円</p>
              </div>
              <div className="divider h-[1px] bg-[#BCBCBC] my-2 xs-max:hidden"></div>
              <div className="point flex flex-initial my-2 ">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">포인트</p>
                <p className="flex-1">구매 금액의 1%</p>
              </div>
              <div className="card flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">카드 혜택</p>
                <p className="flex-1">무이자 할부 카드 안내</p>
              </div>
              <div className="delivery flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">배송 안내</p>
                <div>
                  <p className="flex-1 text-[14px] text-lenssisDeepGray">
                    2,500원(50,000원 이상 구매 시 무료)
                  </p>
                  <p className="text-[12px]">영업일 기준 5~7일 이내 배송</p>
                </div>
              </div>
              <div className="divider h-[1px] bg-[#BCBCBC] mt-2 mb-4 sm:hidden"></div>
              <div className="divider"></div>
              <div className="delivery flex my-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">사용 기간</p>
                <div className="flex flex-1 gap-2">
                  <button className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                    원데이
                  </button>
                  <button className=" border-solid border-[#D3D3D3] border-[1px] rounded-[28px] text-center py-[1px] px-[12px] text-[#5A5A5A] w-[100px] h-[30px] ">
                    먼슬리
                  </button>
                </div>
              </div>
              <div className="flex ">
                <div className="w-[130px] xs-max:w-[70px] lg:w-[160px]"></div>
                <div className="flex-1 text-[#FF7B02]">★ 1箱に10枚入っております</div>
              </div>
              <div className="delivery flex pt-2">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">세부 색상</p>
                <div className="flex gap-2">
                  {productDetails?.colorCodeList.map((color: string) => (
                    <button
                      key={color}
                      className="w-[30px] h-[30px] rounded-full"
                      style={{ backgroundColor: `${color}` }}
                    />
                  ))}
                </div>
              </div>
              <div className="delivery flex my-2 pt-4">
                <p className="text-black w-[130px] xs-max:w-[70px] lg:w-[160px]">그래프 직경</p>
                <div className="badge flex gap-[5px] lg:flex-wrap lg:w-[280px] xl:w-[415px]">
                  {productDetails?.graphicDiameterList.map((item, index) => (
                    <button
                      key={index}
                      className="w-[55px] h-[30px] text-[14px] text-lenssisDeepGray text-center leading-6 border-solid border-[1px] border-lenssisStroke rounded-[20px] px-2"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center border-b-2 border-gray-100 mb-5">
              <div className="flex ">
                <span className=" text-black w-[130px] xs-max:w-[70px] lg:w-[160px] text-[14px]">도수</span>
              </div>
              <div className="">
                <select
                  name="상품명"
                  className="border-solid border-[1px] border-r-0 border-lenssisStroke text-lenssisGray w-[200px] h-[30px] rounded-[5px] pl-[20px] appearance-none bg-[url('/assets/selectArrow.svg')] bg-no-repeat bg-right"
                  disabled={true}
                >
                  <option value="">選択してください</option>
                  <option value="0.00,0,376">0.00</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <span className="leading-10 text-black text-[16px] font-bold">총 상품 금액</span>
              <span className="title-font text-[25px] text-black font-bold">1,800円</span>
            </div>
            <div className="divder h-[2px] bg-slate-700 my-2"></div>
            <div className="flex gap-4 xs-max:flex-col py-2">
              <button className="w-1/2 cursor-pointer bg-white text-black text-[14px] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded xs-max:w-full">
                장바구니
              </button>
              <button className="w-1/2 cursor-pointer text-white bg-lenssisDark text-[14px] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none rounded xs-max:w-full">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
