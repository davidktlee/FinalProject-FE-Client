import React, { useState } from 'react';
import Counter from './Counter';


interface CartItemProps {
  isTotalChecked: boolean;
  setIsTotalChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CartItem = ({isTotalChecked,setIsTotalChecked}:CartItemProps) => {
  const [isChecked,setIsChecked] = useState(false)

  const onChange = () => {
    setIsTotalChecked(false)
    setIsChecked(prev => !prev)
  }
  return (
    <li className='flex my-4 text-sm xs:text-base items-center'>
          <input type="checkbox" checked={isChecked || isTotalChecked} onChange={onChange} className='mr-2 w-4 h-4 accent-lenssisDark' />
          <img className='xs:w-[100px] h-[100px]' src="assets/eyes.png" alt="" />
          <div className='ml-4 grow flex flex-col'>
          <div>에이 링+ 그레이</div>
        <p className='line-through'>2,200円</p>
        <p className='font-bold text-lg text-black'>1,800円</p>
        <div>
          <Counter />
        </div>
          </div>
          <div className=' min-w-[30px] xs:min-w-[40px]'>
            <button className='underline text-lenssisStroke'>삭제</button>
          </div>
          </li>
  );
};

export default CartItem;