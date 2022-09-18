import React from 'react';

interface FormErrorMessageProps {
  errorTitle?: string
  titleColor?:string
  titleSize?:string
  
  errorText:string
  textColor?:string
  textSize?:string
}

const FormErrorMessage = ({errorTitle,titleColor,errorText,textSize,textColor,titleSize}:FormErrorMessageProps) => {
  return (
    <p className='bg-rose-200/60 rounded-sm pl-[2px] pr-4 mt-1 truncate w-fit'>
      <span className={`text-rose-500 text-${titleSize || 'sm'}`}>{errorTitle ? `[ ${errorTitle} ] : ` : ''}</span>
      <span className={`text-${textColor || 'rose-400'} text-${textSize || 'xs'}`}>{errorText}</span>
    </p>
  );
};

export default FormErrorMessage;