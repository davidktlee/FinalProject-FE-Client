import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectProduct } from '../../store/selectProduct';
import useCart, { CartItemsType } from './hooks/useCart';

interface CounterProps {
  pcs:number
  item:CartItemsType
  products:CartItemsType[]
  setProducts: React.Dispatch<React.SetStateAction<CartItemsType[]>>
}

const Counter = ({setProducts,pcs,item,products}:CounterProps) => {
  const [selectedProducts,setSelectedProducts] = useRecoilState(selectProduct);
  const [count,setCount] = useState(pcs)
  
  
  const countHandler = (cnt:number) => {
    if(count + cnt < 1) return;
    setCount(prev => prev += cnt);
    let newSelectedProduct = products.map((product) => {
      if( product.cartId === item.cartId) {
        return {...product,pcs:pcs += cnt};
      }else{
        return product
      }
      
    })
    setProducts(newSelectedProduct);
  }
  

  return (
    <div className='flex h-[15px] xs:h-[26px] w-[50px] xs:w-[88px] items-center'>
      <button className='w-[15px] xs:w-[20px] border border-solid border-lenssisStroke ' onClick={() => countHandler(-1)}>&nbsp;-&nbsp;</button>
      <div className='w-[20px] xs:w-[30px] xs:h-[26px] text-center border-y border-solid border-lenssisStroke text-sm flex items-center justify-center text-[7px]'>{item.pcs}</div>
      <button className='w-[15px] xs:w-[20px] border border-solid border-lenssisStroke 'onClick={() => countHandler(1)}>&nbsp;+&nbsp;</button>
    </div>
  );
};

export default Counter;