import React, { useState } from 'react';
import Counter from './Counter';
import {HiCheck} from 'react-icons/hi'
import CheckBox from '../common/ui/CheckBox';

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
    <li className='flex my-6 text-sm xs:text-base items-center h-[90px] xs:h-[110px] '>
      <CheckBox isChecked={isChecked} onClick={onClick} isTotalChecked={isTotalChecked} bgColor="bg-lenssisDark" />
          <img className='w-[90px] xs:w-[120px] h-[100px] xs:h-[120px]' src="assets/eyes.png" alt="" />
          <div className='ml-[6px] xs:ml-4 grow flex flex-col'>
        <div className='mb-2'>에이 링+ 그레이</div>
      
 <div className='mb-3 xs:mb-0'>
          <p className='line-through text-[10px] xs:text-sm'>2,200円</p>
          <p className='font-bold text-xs xs:text-lg text-black pb-1 xs:pb-4'>1,800円</p>
   
 </div>       
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