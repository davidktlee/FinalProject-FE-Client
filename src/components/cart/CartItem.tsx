import React, { useEffect, useState } from 'react'
import Counter from './Counter'

import CheckBox from '../common/ui/CheckBox'
import { CartItemsType } from './hooks/useCart'

interface CartItemProps {
  isTotalChecked: boolean
  setIsTotalChecked: React.Dispatch<React.SetStateAction<boolean>>
  item: CartItemsType
  selectedProduct:CartItemsType[]
  selectProductHandler: (cart: CartItemsType, checked: boolean) => void
  setSelectedProduct: React.Dispatch<React.SetStateAction<CartItemsType[]>>
  products:CartItemsType[]
  setProducts: React.Dispatch<React.SetStateAction<CartItemsType[]>>
}

const CartItem = ({setProducts,products, isTotalChecked, item ,selectedProduct,selectProductHandler,setIsTotalChecked,setSelectedProduct}: CartItemProps) => {
  
  const [isChecked,setIsChecked] = useState(false)

  const onClick = () => {
    setIsTotalChecked(false);
    setIsChecked(prev => !prev);
    
  }




  useEffect(() => {
    if(!isTotalChecked){
      setIsChecked(false)
    }
    selectProductHandler(item,isTotalChecked)
  },[isTotalChecked])

  useEffect(() => { 
    selectProductHandler(item,isChecked);
  }, [isChecked]);

  useEffect(() => {
    const pcsChangeProduct = products.find((it) => it.cartId === item.cartId)
    if(!pcsChangeProduct) return;
    setSelectedProduct(prev => {
      return prev.map(it => {
        if(it.cartId === item.cartId){
          return {...it,pcs:pcsChangeProduct.pcs}
        }else{
          return {...it}
        }
      })
    })
  }, [products])
  return (
    <li className="flex my-6 text-sm xs:text-base items-center h-[90px] xs:h-[110px] ">
      {/* selectedProduct에 내 cartId가 있으면 true 없으면 false로 작동하게 만든다. */}
      <CheckBox
        isChecked={selectedProduct.some(product => product.cartId === item.cartId)}
        onClick={onClick}
        bgColor="bg-lenssisDark"
      />
      <img className="w-[90px] xs:w-[120px] h-[100px] xs:h-[120px]" src={item.imageUrl} alt="" />
      <div className="ml-[6px] xs:ml-4 grow flex flex-col">
        <div className="mb-2">
          {item.name} - {item.color}
        </div>

        <div className="mb-3 xs:mb-0">
          <p className="line-through text-[10px] xs:text-sm">{item.price.toLocaleString()}円</p>
          <p className="font-bold text-xs xs:text-lg text-black pb-1 xs:pb-4">
            {(item.price - item.price * (item.discount / 100)).toLocaleString()}円
          </p>
        </div>
        <div>
          <Counter item={item} pcs={item.pcs} products={products} setProducts={setProducts} />
        </div>
      </div>
      <div className=" min-w-[30px] xs:min-w-[40px]">
        <button className="underline text-lenssisStroke">삭제</button>
      </div>
    </li>
  )
}

export default CartItem
