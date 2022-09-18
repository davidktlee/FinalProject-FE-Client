import React, { ChangeEvent, useState,useEffect } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { Link, useLocation } from 'react-router-dom'
import useToast from '../../common/toast/hooks/useToast'
import Input from '../../common/Input'
import Toast from '../../common/toast/ToastItem'
import useForm from '../hooks/useForm'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  ValidatorType,
  validate
} from '../hooks/validator'
import { RegisterType } from '../types/userTypes'
import Birth from './birth/Birth'
import Post from '../../common/post/Post'
import Recaptcha from './Recaptcha'
import { getRandomId } from '../../common/util/randomId'
/** 필수 입력정보
 * 이름 / 우편번호 / 기본 주소 / 상세 주소 / 전화번호 / 이메일 주소 / 생일 / 비밀번호 / 자동 등록 방지
 *  */

export type SignupFormType = {
  lastname: string;
  firstname: string;
  lastReadname: string;
  firstReadname: string;
  postCode: string;
  address: string;
  detailAddress: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
}
export type SignupRecordType = Record<keyof SignupFormType, string>

const Signup = () => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  const { pathname } = useLocation()
  const { fireToast } = useToast()
  const [formValue, setFormValue] = useState<SignupRecordType>({
    lastname: '',
    firstname: '',
    lastReadname: '',
    firstReadname: '',
    postCode: '',
    address: '',
    detailAddress: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthYear: '',
    birthMonth: '',
    birthDay: ''
  })
  const [totalValid,setTotalValid] = useState(false);
  const handleComplete = (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress = data.bname
      }
      if (data.buildingName) {
        extraAddress += extraAddress !== '' ? `,${data.buildingName} ` : `${data.buildingName}`
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    setFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  }

  const addressPopupHandler = () => {
    open({ onComplete: handleComplete })
  }

  const changeFormHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setFormValue((prev) => ({
      ...prev,
      [name]: value
      
    }))
  }
  
  const submitFormHandler = () => {
   
    fireToast({
      id:getRandomId(),
      message:'토스트 테스트 중~',
      position: 'top',
      timer: 2500,
      type: 'success'
    })
    fireToast({
      id:getRandomId(),
      message:'토스트 테스트 중~',
      position: 'bottom',
      timer: 2500,
      type: 'failed'
    })
    const formData = {
      name: `${formValue.lastname}${formValue.firstname}` ,
      readname: `${formValue.lastReadname}${formValue.firstReadname}`,
      postCode: formValue.postCode,
      address: `${formValue.address} ${formValue.detailAddress}`,
      phone: formValue.phone,
      email: formValue.email,
      birthday: `${formValue.birthYear}${formValue.birthMonth}${formValue.birthDay}`,
      password: formValue.password
    }
    console.log(formData)
  }
  const totalvalidate = () => {
    
    let totalValidation = true;
    
    const formValueArray = Object.values(formValue);
    formValueArray.map((item) => {
      const {password,passwordConfirm} = formValue;
      if(!item){
        totalValidation = false;
        return;
      }
      if(password !== passwordConfirm){
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
    <>
    {formValue.password !== formValue.passwordConfirm}
    <div className="w-full h-[1846px] bg-[#F4F6F8] text-base ">
      <h3 className="text-[#1B304A] font-bold text-[22px] text-center w-full pt-[160px]">회원가입</h3>
      <div className=" absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[15%] w-3/5 h-fit bg-white rounded-lg p-10 mt-8">
        <div className="">
          <h4 className="font-bold">고객정보</h4>
          <Input
            name="lastname"
            name2="firstname"
            onChange={changeFormHandler}
            value={formValue.lastname}
            value2={formValue.firstname}
            type="text"
            type2="text"
            double={true}
            label="이름"
            isRequired={true}
            flexDirection="horizontal"
            placeholder="성"
            placeholder2="이름"
            inputWidth="[400px]"
            inputHeight="10"
            validators={[VALIDATOR_MINLENGTH(0), VALIDATOR_MAXLENGTH(5)]}
            errorText="한 글자 이상, 네 글자 미만으로 작성해주세요."
          />
          <Input
            name="lastReadname"
            name2="firstReadname"
            onChange={changeFormHandler}
            value={formValue.lastReadname}
            value2={formValue.firstReadname}
            type="text"
            type2="text"
            double={true}
            label="이름 읽는 법"
            isRequired={true}
            flexDirection="horizontal"
            placeholder="세이"
            placeholder2="메이"
            inputWidth="[400px]"
            inputHeight="10"
            validators={[VALIDATOR_MINLENGTH(0), VALIDATOR_MAXLENGTH(8)]}
            errorText="한 글자 이상, 여덟 글자 미만으로 작성해주세요!"
          />

          {/* 컴포넌트로 빼기 */}
          <Post
            addressPopupHandler={addressPopupHandler}
            changeFormHandler={changeFormHandler}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <Input
            name="phone"
            type="number"
            double={false}
            label="전화번호"
            onChange={changeFormHandler}
            value={formValue.phone}
            isRequired={false}
            flexDirection="horizontal"
            placeholder="예시:01022743334"
            inputWidth="[400px]"
            inputHeight="10"
            validators={[VALIDATOR_MINLENGTH(7), VALIDATOR_MAXLENGTH(13)]}
            errorText="8글자 이상 12글자 이하의 숫자들로 입력해주세요"
          />

          <div className="relative pb-6">
            <Input
              name="email"
              type="email"
              double={false}
              onChange={changeFormHandler}
              value={formValue.email}
              label="e-mail"
              isRequired={true}
              flexDirection="horizontal"
              placeholder="info@lenssis.jp"
              inputWidth="[400px]"
              inputHeight="10"
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_EMAIL()]}
              errorText="이메일 형식을 확인해주세요"
            />
            {/* 컴포넌트로 빼기 */}
            <div className="absolute flex items-center left-0 bottom-4 gap-1">
              <svg className="mx-auto" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <image href="/assets/smallInfo.svg" />
              </svg>
              <span className="text-gray-400 text-xs">메일 주소가 로그인 아이디입니다.</span>
            </div>
          </div>

          <Birth changeFormHandler={changeFormHandler} formValue={formValue} setFormValue={setFormValue} />

          <Input
            name="password"
            name2="passwordConfirm"
            onChange={changeFormHandler}
            value={formValue.password}
            value2={formValue.passwordConfirm}
            type="password"
            type2="password"
            double={true}
            label="비밀번호"
            isRequired={true}
            flexDirection="vertical"
            placeholder="반각 영숫자 기호 8, 32문자"
            placeholder2="확인을 위해 다시 한번 입력하세요"
            inputWidth="[400px]"
            inputHeight="10"
            validators={[VALIDATOR_MINLENGTH(9), VALIDATOR_MAXLENGTH(20)]}
            errorText="비밀번호는 10글자 이상 20글자 미만으로 작성해주세요."
          />

          {pathname === '/signup' && <Recaptcha />}
        </div>
        <div className="flex w-full items-center mt-8 h-[45px] gap-4">
          <Link
            to="/"
            className="rounded-md flex-1 h-full text-[#3e6d87] bg-white border-[#3e6d87] border-solid border box-border font-bold cursor-pointer flex justify-center items-center"
          >
            <span className="text-[14px] font-bold">취소</span>
          </Link>
          <button
            className="rounded-md flex-1 h-full bg-[#3e6d87] text-white border-transparent box-border font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
            onClick={submitFormHandler}
            disabled={!totalValid}
          >
            <span>회원 가입</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
