import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount] = useState(0)

  const countHandler = (cnt:number) => {
    if(count + cnt < 0) return;
    setCount(prev => prev += cnt)
  }
  return (
    <div className='flex '>
      <button className='border border-solid border-lenssisStroke px-1' onClick={() => countHandler(-1)}>&nbsp;-&nbsp;</button>
      <div className='w-8 text-center border-y border-solid border-lenssisStroke text-sm flex items-center justify-center'>{count}</div>
      <button className='border border-solid border-lenssisStroke px-1'onClick={() => countHandler(1)}>&nbsp;+&nbsp;</button>
    </div>
  );
};

export default Counter;