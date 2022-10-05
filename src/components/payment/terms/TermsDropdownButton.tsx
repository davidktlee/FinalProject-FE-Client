import React from 'react';
import {BsTriangleFill} from 'react-icons/bs'

interface TermsDropdownButtonProps {
  onClick: () => void
}

const TermsDropdownButton = ({onClick}:TermsDropdownButtonProps) => {
  return (
  <div className='relative'>
  <button className='absolute w-[20px] h-[20px] xs:h-[30px] xs:w-[30px] right-0 -top-6 xs:-top-10 rotate-180 border p-1 rounded-[5px] flex items-center justify-center' onClick={onClick}><BsTriangleFill color='#d3d3d3' /></button>
  </div>)
    
  
};

export default TermsDropdownButton;