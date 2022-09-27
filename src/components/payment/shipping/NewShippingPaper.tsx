import React, { ChangeEvent, useState } from 'react';
import { DaumPostcodePopupParams } from 'react-daum-postcode';
import { GoTriangleDown } from 'react-icons/go';
import ConfirmModal from '../../common/ui/ConfirmModal';
import DeliveryRequest from './DeliveryRequest';
import { PaymentFormValueType } from '../Payment';


interface NewShippingPaperProps {
  domainArray: string[]
  isOpen:boolean
  domainSelectHandler: () => void
  
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  open:(options?: DaumPostcodePopupParams | undefined) => Promise<void>
}

const NewShippingPaper = ({domainArray,isOpen,domainSelectHandler,setIsOpen,open}:NewShippingPaperProps) => {

  const [newFormValue,setNewFormValue] = useState<PaymentFormValueType>({
    orderer:'',
    postCode:'',
    address:'',
    phone:'',
    email:'',
    detailAddress:'',
    userRequestMessage:'',
  })
  const [newPhoneFormValue,setNewPhoneFormValue] = useState<Record<string,string|number>>({
    firstNumber:'',
    middleNumber:'',
    lastNumber:'',
  })
  const [newEmailFormValue,setNewEmailFormValue] = useState<Record<string,string>>({
    emailIdentity:'',
    emailDomain:'',
  })
  const newEmailChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newPhoneFormValueChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewPhoneFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newEmailDomainSelectHandler = (domain:string) => {
    setNewEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }
  const newFormChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {target:{name,value}} = e;
    setNewFormValue((prev) => ({
      ...prev,
      [name]:value
    }))
  }
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
    setNewFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  }

  const addressPopupHandler = () => {
    open({ onComplete: handleComplete })
  }
  return (
    <>
    
    <div className='flex justify-start items-center my-4 max-w-[600px]'>
     <label className='min-w-[140px] text-lenssisDark font-bold'><span>주문자</span>{' '}<span className='text-rose-400'>&nbsp;*</span></label>
     <div className={`flex items-start justify-start w-full`}>
     <input name="orderer" onChange={newFormChangeHandler} value={newFormValue.orderer} className={`w-full h-10 border border-solid border-gray-200 rounded-md max-w-[410px] pl-1 focus:outline-1 focus:outline-[#ABC8DF]`} type="text"/>
     </div>
    </div>


    <div className='flex justify-start items-start my-4 w-full '>
     <label className='min-w-[140px] text-lenssisDark font-bold mt-4'><span>주소</span>{' '}<span className='text-rose-400'>&nbsp;*</span></label>
     
     <div className='flex flex-col justify-center my-4'>
     
     
      <div className='flex items-center justify-start gap-x-4 w-[450px] mb-1'>
        <input
          type="text" name="postCode" onChange={newFormChangeHandler} value={newFormValue.postCode}
          className="h-10 border border-solid border-gray-200 rounded-md max-w-[400px]  focus:outline-1 focus:outline-[#ABC8DF] pl-1"
          readOnly
        />
        <button className=" w-28 h-10 bg-lenssisDark rounded-md text-white font-bold border-none cursor-pointer" onClick={addressPopupHandler}>우편 번호 검색</button>
      </div>
      <div className='flex flex-col w-full gap-y-1'>
        <input name="address" onChange={newFormChangeHandler} value={newFormValue.address} className={`grow w-[410px] text-sm h-10 border border-solid border-gray-200 rounded-md pl-1 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type="text" readOnly  />
        <input name="detailAddress" onChange={newFormChangeHandler}value={newFormValue.detailAddress} className={`grow w-[410px] text-sm h-10 border border-solid border-gray-200 rounded-md pl-1 focus:outline-1 focus:outline-[#ABC8DF] placeholder-gray-400/60 `} type="text" />
     </div>
     </div>
    </div>

  <div className="flex w-full justify-start items-start my-4">
    <label className="font-semibold block pb-1 text-[#1B304A] w-[140px]">
      휴대폰 <span className="text-rose-400">&nbsp;*</span>
    </label>
    <div className="flex items-center mb-1 w-[450px]">
      <input
        name='firstNumber'
        value={newPhoneFormValue.firstNumber}
        type="number"
        className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
        onChange={newPhoneFormValueChangeHandler}
      />
      <span>&nbsp; - &nbsp;</span>
      <input
        name="middleNumber"
        value={newPhoneFormValue.middleNumber}
        type="number"
        className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
        onChange={newPhoneFormValueChangeHandler}
      />
      <span>&nbsp; - &nbsp;</span>
      <input
        name="lastNumber"
        value={newPhoneFormValue.lastNumber}
        type="number"
        className="border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
        onChange={newPhoneFormValueChangeHandler}
      />
    </div>
  </div>



  <div className="flex my-2 items-center w-[550px]">
  <label className="font-semibold block pb-1 text-[#1B304A] min-w-[140px]">이메일 주소</label>
    <div className="flex items-center w-[550px] ">
      <div className="w-full flex items-center justify-start relative">
        <div className='flex items-center'>
          <input
            name="emailIdentity"
            value={newEmailFormValue.emailIdentity}
            type="text"
            className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[140px] xs:max-w-[160px] text-xs xs:text-sm pl-1"
            onChange={newEmailChangeHandler}
          />
          <span className="text-gray-400">&nbsp;@&nbsp;</span>
        </div>
        <input
          name="emailDomain"
          value={newEmailFormValue.emailDomain}
          type="text"
          className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[100px] text-xs xs:text-sm pl-1"
          onChange={newEmailChangeHandler}
        />
        <div
          className="flex items-center justify-center w-[100px] border border-solid border-gray-200 h-10 rounded-md ml-6 cursor-pointer"
          onClick={domainSelectHandler}
        >
          <span className="text-xs xs:text-sm">
            {domainArray.includes(newEmailFormValue.emailDomain) ? newEmailFormValue.emailDomain : '직접입력'}
          </span>{' '}
          <GoTriangleDown size={16} />
        </div>

        {isOpen && (
          <ul className="absolute right-2 top-10 xs:-right-4 xs:top-10 bg-white border border-solid border-gray-400 rounded-md min-w-[140px]">
            {domainArray.map((item) => (
              <li
                key={item}
                className="p-1 border-b border-solid border-gray-400 w-full cursor-pointer hover:bg-slate-200 bg-opacity-30 text-center"
                onClick={() => newEmailDomainSelectHandler(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
  <div>
  </div>

  {/* 배송요청사항 컴포넌트로 만들기 */}
  <DeliveryRequest onChange={newFormChangeHandler} value={newFormValue.userRequestMessage} />
  </>
  );
};

export default NewShippingPaper;