import React from 'react';

interface InputProps {
  label:string
  placeholder:string
  type:string
  double:boolean
  flexDirection:'vertical' | 'horizontal'
  type2?:string;
  placeholder2?:string;
  isRequired:boolean;
  readonly?:boolean;
  inputWidth:string;
  inputHeight:string;
  labelColor?:string;
  labelBold?:'bold'
}

const Input = ({label,placeholder,type,double, flexDirection,type2,placeholder2,isRequired,readonly,inputWidth,inputHeight,labelColor,labelBold}:InputProps) => {
  if(double){
    return (
      <div className='flex flex-col justify-center my-[30px] w-full h-fit gap-2'>
       <label><span className={`text-${labelColor} font-${labelBold} `} >{label}</span>{' '}<span className='text-rose-400'>{isRequired && '*'}</span></label>
       <div className={`${flexDirection === 'horizontal' ? 'flex items-center justify-start gap-x-4' : 'flex flex-col justify-center gap-y-2'}`}>
       <input className={`grow h-${inputHeight} border border-solid border-gray-200 rounded-xl max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60`} type={type} placeholder={placeholder} disabled={readonly} />
       <input className={`grow h-${inputHeight} border border-solid border-gray-200 rounded-xl max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60`} type={type2} placeholder={placeholder2} />
       </div>
      </div>
    );  
  }
  if(!double){
    return (
      <div className='flex flex-col justify-center my-4 gap-2'>
       <label><span className={`text-${labelColor} font-${labelBold}`}>{label}</span>{' '}<span className='text-rose-400'>{isRequired && '*'}</span></label>
       <div className={`${flexDirection === 'horizontal' ? 'flex items-center justify-start' : 'flex flex-col justify-center gap-y-2'}`}>
       <input className={`w-full h-${inputHeight} border border-solid border-gray-200 rounded-xl max-w-${inputWidth} pl-2 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60`} type={type}  placeholder={placeholder} />
       </div>
      </div>
      )  
  }
  return (
    <>
     
    </>
  );
};

export default Input;