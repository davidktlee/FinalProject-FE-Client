import React from 'react';
import Input from '../../common/Input';

const Signin = () => {
  return (
    <div className='w-full h-screen bg-[#F4F6F8] relative'>
      <div className='absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[390px] mt-[120px] bg-white rounded-md shadow-lg shadow-indigo-300/40'>
        
        <h3 className='mt-5'>
        <svg className='mx-auto' width={68} height={38} xmlns="http://www.w3.org/2000/svg"><image href="/assets/login.svg" /></svg>
        </h3>
        {/*label,placeholder,type,double, flexDirection,type2,placeholder2,isRequired,readonly */}
        <div className='px-6 w-full'>
        <Input label="Email" placeholder='Email' type="text" double={false} flexDirection="horizontal" isRequired={false}  inputWidth={'full'} inputHeight="12"  labelColor='gray-400' labelBold='bold'/>
        <Input label="Password" placeholder='Password' type="password" double={false} flexDirection="horizontal" isRequired={false} inputWidth={'full'}  inputHeight="12" labelColor='gray-400' labelBold='bold' />
        <button className='bg-[#A4CBE1] w-full h-12 rounded-lg mt-7'><span className='text-white font-bold'>Sign in</span></button>
        </div>
        
      </div>
    </div>
  );
};

export default Signin;