import React,{useState} from 'react';
import { useDaumPostcodePopup} from 'react-daum-postcode'
import Input from '../../common/Input';
import { RegisterType } from '../types/userTypes';
  /** 필수 입력정보
   * 이름 / 우편번호 / 기본 주소 / 상세 주소 / 전화번호 / 이메일 주소 / 생일 / 비밀번호 / 자동 등록 방지
   *  */ 



  
const Signup = () => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
  const [formValue,setFormValue] = useState<RegisterType>({
    name: '',
    readname: '',
    postNumber:'',
    phone: '',
    email: '',
    birthday: '',
    password: '',
    recommandCode: '',
    postCode: 0,
    address: '',
  })
  
    const handleComplete = (data:any) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if(data.addressType === 'R') {
        if(data.bname !== '') {
          extraAddress = data.bname;
        }
        if(data.buildingName) {
          extraAddress += extraAddress !== '' ? `,${data.buildingName} ` : `${data.buildingName}`;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setFormValue(prev => ({
        ...prev,
        postCode: data.zonecode,
        address: fullAddress
      }))
      
      
    }

  const addressPopupHandler = () => {
    open({onComplete: handleComplete})
  }
  return (
    <div className='w-full h-[1846px] bg-[#F4F6F8] text-base'>
      <h3 className='text-[#1B304A] font-bold text-[22px] text-center w-full pt-[15%]'>회원가입</h3>
    <div className=' absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[15%] w-3/5 h-fit bg-white rounded-md border border-solid border-[#c2c2c2] p-2'>
    
    <div className='pl-[27px]'>
    <h4 className='font-bold'>고객정보</h4>
    <Input type="text" type2='text' double={true} label="이름" isRequired={true} flexDirection="horizontal" placeholder='성' placeholder2='이름' />
    <Input type="text" type2='text' double={true} label="이름 읽는 법" isRequired={true} flexDirection="horizontal" placeholder='세이' placeholder2='메이' />
    
    <div className='flex flex-col gap-4 w-[660px]'>
      <label className='font-semibold'>우편번호</label>
      <div className='flex justify-start items-center gap-2'>
      <input type="text" className='grow h-10 border border-solid border-gray-200 rounded-md' />
      <div className='grow'>
    <button className='w-40 h-11 bg-[#3e6d87] rounded-md text-white font-bold border-none' onClick={addressPopupHandler}>주소 검색</button>
    </div>
    </div>
    </div>
    <Input type="text" type2='text' double={true} label="주소" isRequired={false} flexDirection='vertical' placeholder='기본 주소' placeholder2='상세 주소' />
    <Input type='number' double={false} label="전화번호" isRequired={false} flexDirection="horizontal" placeholder='예시:1111222223333' />
    <Input type="email" double={false} label="e-mail" isRequired={false} flexDirection="horizontal" placeholder='info@lenssis.jp' />
    <div className='flex flex-col'>
      <label><span className="font-semibold">생년월일</span></label>
      <div className='flex items-center gap-x-4'>
        <label>
        <input type="number" className='h-10 border border-solid border-gray-200 rounded-md' min={1900} /> 
        <span className='font-semibold ml-2'>년</span>
        </label>
        <label>
        <input type="number" className='h-10 border border-solid border-gray-200 rounded-md' min={1} max={13} /> 
        <span className='font-semibold ml-2'>월</span>
        </label>
        <label>
        <input type="number" className='h-10 border border-solid border-gray-200 rounded-md' min={1} max={31} /> 
        <span className='font-semibold ml-2'>일</span>
        </label>
      </div>
    </div>
   <Input type="text" type2="text" double={true} label="비밀번호" isRequired={true} flexDirection="vertical" placeholder='반각 영숫자 기호 8, 32문자' placeholder2='확인을 위해 다시 한번 입력하세요' />
   
   <Input type="text" double={false} label="소개자 코드" isRequired={false} flexDirection="horizontal" placeholder='소개자 코드 ' />

    </div>
    </div>
    </div>
  )
};

export default Signup;