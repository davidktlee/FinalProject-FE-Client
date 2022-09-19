import React, { ChangeEvent, useState,useEffect } from 'react';
import Input from '../../common/Input';
import { useUser } from '../hooks/useUser';
import { VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../hooks/validator';


interface formValueType {
  email:string;
  password:string;
}

const Signin = () => {

  const [formValue,setFormValue] = useState({
    email:'',
    password:''
  })
  const [totalValid,setTotalValid] = useState(false)
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value,name}} = e;
    setFormValue(prev => ({
      ...prev,
      [name]:value
    }))
  }
  const submitSigninHandler = () => {
  console.log(formValue)
  }

  const {user} = useUser()
  console.log(user);

  const totalvalidate = () => {
    let totalValidation = true;
    const formValueArray = Object.values(formValue);
    formValueArray.map((item) => {
      const {password,email} = formValue;
      if(!item){
        totalValidation = false;
        return;
      }
      if(email.trim().length < 8 || !/^\S+@\S+\.\S+$/.test(email) || password.length < 10){
        totalValidation = false
        return;
      }
    })
    setTotalValid(totalValidation)
  }
  useEffect(() => {
    totalvalidate()
  }, [formValue])
  
  return (
    <div className='w-full h-screen bg-[#F4F6F8] relative'>
      <div className='absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-fit mt-[120px] bg-white rounded-lg shadow-[-5px_0_30px_1px] shadow-indigo-100 pb-12 border border-solid border-gray-200'>
        
        <h3 className='mt-5'>
        <svg className='mx-auto' width={68} height={38} xmlns="http://www.w3.org/2000/svg"><image href="/assets/login.svg" /></svg>
        </h3>
        {/*label,placeholder,type,double, flexDirection,type2,placeholder2,isRequired,readonly */}
        <div className='px-6 w-full'>
          
        <Input name="email" errorText='이메일 형식에 맞게 입력해주세요' validators={[VALIDATOR_EMAIL(),VALIDATOR_MINLENGTH(8)]} value={formValue.email} onChange={onChange} label="Email" placeholder='Email' type="text" double={false} flexDirection="horizontal" isRequired={false}  inputWidth={'full'} inputHeight="12"  labelColor='gray-400' labelBold='bold'/>

        <Input name="password" errorText='비밀번호는 10~20자 입니다.' validators={[VALIDATOR_MINLENGTH(9),VALIDATOR_MAXLENGTH(21)]} value={formValue.password} onChange={onChange} label="Password" placeholder='Password' type="password" double={false} flexDirection="horizontal" isRequired={false} inputWidth={'full'}  inputHeight="12" labelColor='gray-400' labelBold='bold' />
        
        <button className='bg-[#A4CBE1] w-full h-12 rounded-lg mt-7 disabled:bg-gray-400 disabled:cursor-default' onClick={submitSigninHandler} disabled={!totalValid}><span className='text-white font-bold' >Sign in</span></button>
        </div>
        
      </div>
    </div>
  );
};

export default Signin;