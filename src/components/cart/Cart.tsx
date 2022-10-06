import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { selectProduct, totalPriceState } from '../../store/selectProduct'
import { useRefreshToken } from '../auth/hooks/useRefreshToken'
import { useUser } from '../auth/hooks/useUser'
import CardTemplate from '../common/ui/CardTemplate'
import CheckBox from '../common/ui/CheckBox'
import PageLayout from '../common/ui/PageLayout'
import { getStoredToken } from '../local-storage/userStorage'
import CartItem from './CartItem'
import useCart, { CartItemsType } from './hooks/useCart'

const Cart = () => {
  const refreshToken = useRefreshToken()
  const [isTotalChecked, setIsTotalChecked] = useState(false)
  const { user } = useUser()
  const {cartItems} = useCart()
  const [selectedProduct,setSelectedProduct] = useRecoilState(selectProduct)
  const [totalPrice,setTotalPrice] = useRecoilState(totalPriceState);
  const [shippingFee,setShippingFee] = useState(0)
  const [products,setProducts] = useState<CartItemsType[]>([])
  // 체크박스를 클릭한다.
  // isTotalChecked 또는 isChecked가 true이면 해당 아이템이 담긴다.
  // isTotalChecked 또는 isChecked가 false이면 해당 아이템이 빠진다.
  const selectProductHandler = (cart:CartItemsType,checked:boolean) => {
    if(checked){
      setSelectedProduct((prev) => [...prev,cart])
      setSelectedProduct(prev => Array.from(new Set(prev)));
    }else{
      setSelectedProduct((prev) => prev.filter((item) => item.cartId !== cart.cartId )) 
    }
  }

  const totalCheckedHandler = useCallback(() => {
    setSelectedProduct([]);
    setIsTotalChecked((prev) => !prev)
    
  }, [])

  const buyAllHandler = () => {
    setIsTotalChecked(true);
    setSelectedProduct(() => [...products])
    
  }

  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
  }, [])
  useEffect(() => {
    setProducts(cartItems);
  }, [cartItems])

  useEffect(() => {
    if(!isTotalChecked){
      setSelectedProduct([]);
    }
    products.map((item) => selectProductHandler(item,isTotalChecked))
  }, [isTotalChecked])
  
  useEffect(() => {
    setTotalPrice(0);
    let totalP = 0;
    let totalDiscount = 0;
    selectedProduct.map(item => totalP += (item.price * item.pcs))
    selectedProduct.map(item => totalDiscount += item.discount)
    setTotalPrice(totalP - (totalP * ((totalDiscount/selectedProduct.length || 0) / 100)))
    setShippingFee(totalPrice >= 3000 ? 0 : 500)
  }, [selectedProduct,totalPrice,products])
  
  
  
  // const getProduct = async () => {
  //   const res = await axiosInstance({
  //     url: 'https://633010e5591935f3c8893690.mockapi.io/lenssis/api/v1/products'
  //   })
  //   return res.data
  // }

  // const { data: productLists } = useQuery([queryKeys.product], getProduct, {
  //   refetchOnWindowFocus: false
  // })

  return (
    <PageLayout layoutWidth="w-[90%]" innerTop="top-[30%]">
      <CardTemplate title="장바구니" isTitleVisible={true}>
        <div className="flex items-center justify-between py-1 border-b border-solid border-lenssisGray w-full">
          <p className="pl-2 pb-1 text-base xs:text-xl text-lenssisDark font-bold">전체</p>
        </div>
        <div className="flex flex-col items-center xs:flex-row xs:items-start text-lenssisGray mt-4 xs:mt-10">
          <div className="grow flex flex-col px-0 xs:px-2 w-full">
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0 w-full py-4 border-y border-solid border-lenssisStroke text-xs xs:text-base ">
              <div className="flex items-center pl-4">
                {isTotalChecked && (
                  <CheckBox
                    onClick={totalCheckedHandler}
                    bgColor="bg-lenssisDark"
                    isChecked={isTotalChecked}
                  />
                )}
                {!isTotalChecked && <CheckBox onClick={totalCheckedHandler} bgColor="bg-lenssisStroke" />}

                <label className="text-lenssisStroke text-base">전체선택(2/2)</label>
              </div>
              <p className="w-full xs:w-fit text-center xs:text-right">
                <span className="font-semibold">TIP! 1200円</span> 더 구매하면,{' '}
                <span className="font-semibold">500円 추가 할인</span> 받을 수 있어요.
              </p>
            </div>
            <ul className="pl-4">
              {products.map((item) => (
                <CartItem setProducts={setProducts} key={item.productDetailsId} products={products} item={item} isTotalChecked={isTotalChecked} setIsTotalChecked={setIsTotalChecked} selectedProduct={selectedProduct} selectProductHandler={selectProductHandler} setSelectedProduct={setSelectedProduct} />
              ))}
              
              
            </ul>
          </div>

          <div className="w-full xs:w-2/5 xs:max-w-[440px] text-base">
            <div className="flex flex-col">
              <div className="border border-solid border-gray-100 bg-[#f4f6f8] font-bold text-lenssisGray flex flex-col pt-2 p-6 rounded-[3px] px-8 gap-2">
                <h3 className="text-xl py-4 text-[#5a5a5a]">지불 금액</h3>
                <div className="flex items-center justify-between">
                  <p>총 상품 금액</p> <p>{totalPrice.toLocaleString()}円</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>총 배송비</p> <p>{shippingFee}円</p>
                </div>
                <div className="flex items-center justify-between text-black">
                  <p>결제 예상 금액</p> <p>{(shippingFee + totalPrice).toLocaleString()}円</p>
                </div>
              </div>

              <div className="flex gap-4 flex-col xs:flex-row items-center w-full justify-between mt-4">
                
                <Link to="/payment" className="flex items-center justify-center border border-solid border-lenssisDark py-2 w-full xs:w-[220px] rounded-[5px] text-lenssisDark text-sm h-[50px] font-semibold">
                  선택상품구매
                </Link>
                {/* onClick시 모든 상품을 주문페이지에 request하는 로직 작성해야 함 */}
                <Link
                  to="/payment"
                  className="flex items-center justify-center text-center border border-solid border-transparent bg-lenssisDark py-2 w-full xs:w-[220px] rounded-[5px] text-white text-sm h-[50px] font-semibold"
                  onClick={buyAllHandler}
                >
                  전체상품구매
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center mt-[52px] text-lenssisGray font-semibold gap-4">
              <p className="">3,000円 이상 구매 시 무료 배송</p>
              <Link to="/">
                <span className="underline">쇼핑 계속</span>
              </Link>
            </div>
          </div>
        </div>
      </CardTemplate>

      {/* <div className="hidden xs:block">
        <CardTemplate title="2번" marginTop="mt-12">
          <h3 className="font-bold text-lenssisDark pb-2 border-b border-solid border-lenssisGray">
            이런 상품도 있어요!
          </h3>
          <div className="flex items-center gap-4 mt-12">
            {productLists &&
              productLists
                .slice(0, 4)
                .map((item: any, idx: number) => (
                  <Card
                    key={`${item.productId}-${idx}`}
                    idx={idx}
                    colorAndImage={item.colorAndImage}
                    productId={item.productId}
                    series={item.series}
                    price={item.price}
                    discount={item.discount}
                    graphicDiameter={item.graphicDiameter}
                  />
                ))}
          </div>
        </CardTemplate>
      </div> */}
    </PageLayout>
  )
}

export default Cart
