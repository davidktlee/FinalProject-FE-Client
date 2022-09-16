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
}

const Input = ({label,placeholder,type,double, flexDirection,type2,placeholder2,isRequired,readonly}:InputProps) => {
  if(double){
    return (
      <div className='flex flex-col justify-center my-4 w-full h-fit gap-2'>
       <label><span className='text-rose-400'>{isRequired && '*'}</span><span className='font-semibold' >{label}</span></label>
       <div className={`${flexDirection === 'horizontal' ? 'flex items-center justify-start gap-x-4' : 'flex flex-col justify-center gap-y-2'}`}>
       <input className='grow h-10 border border-solid border-gray-200 rounded-md' type={type} placeholder={placeholder} disabled={readonly} />
       <input className='grow h-10 border border-solid border-gray-200 rounded-md' type={type2} placeholder={placeholder2} />
       </div>
      </div>
    );  
  }
  if(!double){
    return (
      <div className='flex flex-col justify-center my-4 gap-2'>
       <label><span className='font-semibold'>{label}</span></label>
       <div className={`${flexDirection === 'horizontal' ? 'flex items-center justify-start' : 'flex flex-col justify-center gap-y-2'}`}>
       <input className='w-1/2 h-10 border border-solid border-gray-200 rounded-md' type={type}  placeholder={placeholder} />
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