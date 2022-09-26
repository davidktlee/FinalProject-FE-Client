import React from 'react';

interface FormErrorMessageProps {
  titleSize?:string
  errorText:string
  textSize?:string
  errorTitle:string;
}

const FormErrorMessage = ({errorText,textSize,titleSize,errorTitle}:FormErrorMessageProps) => {
  return (
    <p className='flex flex-col xs:items-center justify-start xs:flex-row  pl-[2px] pr-4 mt-[1px] truncate w-full'>
      <span className={`text-[#FF4848] text-${titleSize || 'sm'}`}>&#8251;{errorTitle} &nbsp; </span>
      
      <span className={`text-[#FF4848] text-${textSize || 'xs'}`}>{errorText}</span>
    </p>
  );
};

export default FormErrorMessage;