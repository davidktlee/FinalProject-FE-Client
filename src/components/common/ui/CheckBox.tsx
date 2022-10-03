import React from 'react';
import { HiCheck } from 'react-icons/hi';


interface CheckBoxProps {
  onClick: () => void
  isChecked?:boolean;
  isTotalChecked?:boolean
  bgColor:string;
}

const CheckBox = ({onClick,isChecked,isTotalChecked,bgColor}:CheckBoxProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center h-4 w-4 border border-solid border-lenssisStroke rounded-[5px] ${(isChecked || isTotalChecked) && bgColor}   transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
      >
      <HiCheck size={14} color="#ffffff" />
      </div>
  );
};

export default CheckBox;