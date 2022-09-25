import {ChangeEvent} from 'react';
import Input from '../common/Input';
import CardTemplate from '../common/ui/CardTemplate';
import { GoTriangleDown } from 'react-icons/go'
import { VALIDATOR_REQUIRE } from '../auth/hooks/validator';
import Post from '../common/post/Post';
import { PaymentFormValueType } from './Payment';

interface OrderPaperProps {
  formValue: PaymentFormValueType
  setFormValue: React.Dispatch<React.SetStateAction<PaymentFormValueType>>
  changeFormHandler: (e: ChangeEvent<HTMLInputElement>) => void
  addressPopupHandler: () => void
  emailFormValue:{
    emailIdentity: string;
    emailDomain: string;
}
  emailChangeHandler:(e: ChangeEvent<HTMLInputElement>) => void
  domainSelectHandler: () => void
  isOpen: boolean
  emailDomainSelectHandler: (domain: string) => void
  domainArray:string[]
  phoneFormValueChangeHandler:(e:ChangeEvent<HTMLInputElement>) => void
  phoneFormValue: Record<string,string|number>
}

const OrderPaper = ({formValue,setFormValue,changeFormHandler,addressPopupHandler,emailFormValue,emailChangeHandler,domainSelectHandler,isOpen,emailDomainSelectHandler,domainArray,phoneFormValueChangeHandler,phoneFormValue}:OrderPaperProps) => {
  return (
    <>
    
    <Input
      double={false}
      labelColor="text-[#1B304A]"
      errorText="성함을 입력해주세요"
      flexDirection="horizontal"
      inputHeight="10"
      inputWidth="[400px]"
      isRequired={true}
      label="주문자"
      name="orderer"
      placeholder=""
      type="text"
      validators={[VALIDATOR_REQUIRE()]}
      value={formValue.orderer}
      onChange={changeFormHandler}
    />
    <Post
      formValue={formValue}
      setFormValue={setFormValue}
      changeFormHandler={changeFormHandler}
      addressPopupHandler={addressPopupHandler}
      titleText="우편번호"
      isRequired
    />
    <div className="flex w-full flex-col">
      <label className="font-semibold block pb-1 text-[#1B304A]">
        휴대폰 <span className="text-rose-400">&nbsp;*</span>
      </label>
      <div className="flex items-center w-full ">
        <input
          name='firstNumber'
          value={phoneFormValue.firstNumber}
          type="number"
          className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
          onChange={phoneFormValueChangeHandler}
        />
        <span>&nbsp; - &nbsp;</span>
        <input
          name="middleNumber"
          value={phoneFormValue.middleNumber}
          type="number"
          className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
          onChange={phoneFormValueChangeHandler}
        />
        <span>&nbsp; - &nbsp;</span>
        <input
          name="lastNumber"
          value={phoneFormValue.lastNumber}
          type="number"
          className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
          onChange={phoneFormValueChangeHandler}
        />
      </div>
    </div>
    <div className="flex w-full flex-col my-2">
      <label className="font-semibold block pb-1 text-[#1B304A]">이메일 주소</label>
      <div className="flex items-center w-full ">
        <div className="w-full flex items-center justify-start relative">
          <div>
            <input
              name="emailIdentity"
              value={emailFormValue.emailIdentity}
              type="text"
              className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[100px] xs:max-w-[160px] text-xs xs:text-sm pl-1"
              onChange={emailChangeHandler}
            />
            <span className="text-gray-400">&nbsp; @ &nbsp;</span>
          </div>
          <input
            name="emailDomain"
            value={emailFormValue.emailDomain}
            type="text"
            className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px] text-xs xs:text-sm pl-1"
            onChange={emailChangeHandler}
          />
          <div
            className="flex items-center justify-center w-[100px] border border-solid border-gray-200 h-10 rounded-md ml-4 cursor-pointer"
            onClick={domainSelectHandler}
          >
            <span className="text-xs xs:text-sm">
              {domainArray.includes(emailFormValue.emailDomain) ? emailFormValue.emailDomain : '직접입력'}
            </span>{' '}
            <GoTriangleDown size={16} />
          </div>

          {isOpen && (
            <ul className="absolute right-2 top-10 xs:right-[34%] xs:top-10 bg-white border border-solid border-gray-400 rounded-md min-w-[100px]">
              {domainArray.map((item) => (
                <li
                  key={item}
                  className="p-1 border-b border-solid border-gray-400 w-full cursor-pointer hover:bg-slate-200 bg-opacity-30"
                  onClick={() => emailDomainSelectHandler(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderPaper;