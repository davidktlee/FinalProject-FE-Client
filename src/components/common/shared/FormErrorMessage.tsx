import React from 'react';

interface FormErrorMessageProps {
  titleSize?:string
  errorText:string
  textSize?:string
  errorTitle:string;
}

const FormErrorMessage = ({errorText,textSize,titleSize,errorTitle}:FormErrorMessageProps) => {
  return (
    <p className='pl-[2px] pr-4 mt-[1px] truncate w-fit'>
      <span className={`text-[#FF4848] text-${titleSize || 'sm'}`}>&#8251; {errorTitle}: </span>
      <span className={`text-[#FF4848] text-${textSize || 'xs'}`}>{errorText}</span>
    </p>
  );
};

export default FormErrorMessage;