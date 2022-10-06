import React, { useEffect, useState } from 'react';
import useCart from './hooks/useCart';

interface CounterProps {
  pcs:number
}

const Counter = ({pcs}:CounterProps) => {

  

  const [count,setCount] = useState(pcs)

  const countHandler = (cnt:number) => {
    if(count + cnt < 0) return;
    setCount(prev => prev += cnt)
  }
  
  return (
    <div className='flex h-[15px] xs:h-[26px] w-[50px] xs:w-[88px] items-center'>
      <button className='w-[15px] xs:w-[20px] border border-solid border-lenssisStroke ' onClick={() => countHandler(-1)}>&nbsp;-&nbsp;</button>
      <div className='w-[20px] xs:w-[30px] xs:h-[26px] text-center border-y border-solid border-lenssisStroke text-sm flex items-center justify-center text-[7px]'>{count}</div>
      <button className='w-[15px] xs:w-[20px] border border-solid border-lenssisStroke 'onClick={() => countHandler(1)}>&nbsp;+&nbsp;</button>
    </div>
  );
};

export default Counter;