import React, { useState } from 'react';
import Counter from './Counter';
import {HiCheck} from 'react-icons/hi'

interface CartItemProps {
  isTotalChecked: boolean;
  setIsTotalChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CartItem = ({isTotalChecked,setIsTotalChecked}:CartItemProps) => {
  const [isChecked,setIsChecked] = useState(false)

  // filter 기능 이용해서 checked true인 값만.. 추려서 받아야 함.
  const onClick = () => {
    setIsTotalChecked(false)
    setIsChecked(prev => !prev)
  }
  return (
    <li className='flex my-4 text-sm xs:text-base items-center'>
      <div
      onClick={onClick}
      className={`flex items-center justify-center h-4 w-4 border border-solid border-lenssisGray rounded-[5px] bg-white ${(isChecked || isTotalChecked) && 'bg-lenssisDark'}   transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
      >
      <HiCheck size={14} color="#ffffff" />
      </div>
          
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