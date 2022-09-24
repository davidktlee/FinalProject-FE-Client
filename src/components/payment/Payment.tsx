import { useState, ChangeEvent } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { useRecoilState, useRecoilValue } from 'recoil'
import { productState } from '../../store/product'
import { useUser } from '../auth/hooks/useUser'
import { VALIDATOR_REQUIRE } from '../auth/hooks/validator'
import Input from '../common/Input'
import Post from '../common/post/Post'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import { GoTriangleDown } from 'react-icons/go'
import OrderPaper from './OrderPaper'

export interface PaymentFormValueType {
  orderer: string
  postCode: number
  address: string
  phone: string
  email: string
  detailAddress: string
}
const domainArray = ['google.com', 'naver.com', 'daum.net']

const Payment = () => {
  const product = useRecoilValue(productState)
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  const { user } = useUser()
  const [emailFormValue, setEmailFormValue] = useState({
    emailIdentity: '',
    emailDomain: ''
  })
  const [phoneFormValue,setPhoneFormValue] = useState<Record<string,string|number>>({
    firstNumber:'010',
    middleNumber:'',
    lastNumber:'',
  })
  const [formValue, setFormValue] = useState<PaymentFormValueType>({
    orderer: user?.name || '',
    postCode: user?.postCode || 0,
    address: user?.address || '',
    phone: user?.phone || '' ,
    email: user?.email || '',
    detailAddress: ''
  })
  const [isNew,setIsNew] = useState(false);
  const [isFormShow,setIsFormShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const phoneFormValueChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {target:{name,value}} = e;
    setPhoneFormValue(prev => ({
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
  const domainSelectHandler = () => {
    setIsOpen((prev) => !prev)
  }
  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  
  }
  const emailDomainSelectHandler = (domain: string) => {
    setEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }
  
  const formChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value}} = e;
    console.log(value);
    if(value === 'new') {
      setIsFormShow(true)
      setIsNew(true)
    }else{
      setIsFormShow(true)
      setIsNew(false);
    }
  }

  return (
    <PageLayout innerTop="xs:top-[60%] top-1/2" layoutWidth="[90%]" layoutHeight='h-[3000px]'>
      <CardTemplate title="주문/결제" isTitleVisible={true}>
        <div className="pb-12">
          <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark">
            주문 상품
          </h3>
          <div className="flex w-full justify-between items-center py-2 text-gray-300 text-sm px-2">
            <p className="flex-1 text-center">상품명</p>
            <p className="text-center w-[85px] xs:w-[100px]">수량</p>
            <p className="text-center w-[50px] xs:w-[140px]">판매가</p>
          </div>
          <div className="flex flex-col w-full gap-4 items-center justify-center">
            {product.map((item, index) => (
              <div className="flex w-full border-y border-solid border-gray-300" key={item.lensTitle + index}>
                <div className="flex items-center justify-start w-full gap-4 py-4 flex-1">
                  <div className="w-16 xs:w-32 flex items-center h-full">
                    <img src={item.imageURL} />
                  </div>
                  <div className="flex items-start flex-col ">
                    <div className="text-[#5a5a5a] font-semibold">
                      {item.lensTitle} - <span className="text-sm">{item.lensColor}</span>
                    </div>
                    <div className="text-xs">
                      {item.option.map((option, index) => (
                        <span key={option + index}>{option} /</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="flex justify-center items-center w-[40px] xs:w-[80px] text-xs xs:text-base">
                  {index + 1}
                </p>
                <p className="flex justify-center items-center w-[80px] xs:w-[160px] text-xs xs:text-base">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
      <h3 className="w-full pb-1 font-bold border-b border-solid border-lenssisDark text-xl">주문서 작성</h3>
      <OrderPaper
        formValue={formValue}
        setFormValue={setFormValue}
        changeFormHandler={changeFormHandler}
        addressPopupHandler={addressPopupHandler}
        emailFormValue={emailFormValue}
        emailChangeHandler={emailChangeHandler}
        domainSelectHandler={domainSelectHandler}
        isOpen={isOpen}
        emailDomainSelectHandler={emailDomainSelectHandler}
        domainArray={domainArray}
        phoneFormValueChangeHandler={phoneFormValueChangeHandler}
        phoneFormValue={phoneFormValue}
        />
        </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        <h3 className="w-full pb-1 text-xl font-bold border-b border-solid border-lenssisDark">
          배송지 정보
        </h3>
        <div className='flex items-center justify-start mt-4'>
          <label className='font-bold min-w-[140px] text-lenssisDark my-2'>배송지 선택 <span className='text-rose-400'>*</span></label>
          <div className='flex items-center justify-start gap-8'>
          <div className='flex items-center gap-1'>
          <input type="radio" name="selectAddress" value="same" className='appearance-none w-4 h-4 border border-gray-400 checked:border-gray-100 checked:bg-lenssisDark checked:border-[4px] rounded-full ring-0 checked:ring-1 checked:ring-lenssisDark' onChange={formChangeHandler} /><label className='text-lenssisGray font-semibold'>주문자 정보와 동일</label>
          </div>
          <div className='flex items-center gap-1'>
          <input type="radio" name="selectAddress" value="new" className='appearance-none w-4 h-4 border border-gray-400 checked:border-gray-100 checked:bg-lenssisDark checked:border-[4px] rounded-full ring-0 checked:ring-1 checked:ring-lenssisDark' defaultChecked onChange={formChangeHandler}/><label className='text-lenssisGray font-semibold'>새로운 배송지</label>
          </div>
          </div>
        </div>
        {!isNew && isFormShow && <OrderPaper
        formValue={formValue}
        setFormValue={setFormValue}
        changeFormHandler={changeFormHandler}
        addressPopupHandler={addressPopupHandler}
        emailFormValue={emailFormValue}
        emailChangeHandler={emailChangeHandler}
        domainSelectHandler={domainSelectHandler}
        isOpen={isOpen}
        emailDomainSelectHandler={emailDomainSelectHandler}
        domainArray={domainArray}
        phoneFormValueChangeHandler={phoneFormValueChangeHandler}
        phoneFormValue={phoneFormValue}
        />}
        {/* 새로운 배송지는 고객 편의를 위해 따로 state를 만들어서 관리하는게 좋을 것 같다.. */}
        {
          isNew && isFormShow && <div>안녕 난 새로운 배송지</div>
        }
        {!isFormShow && <div className='mt-8'>배송지를 선택해주세요</div>}
        
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark">
          쿠폰/적립금
        </h3>
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        쇼핑몰 이용 약관
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        비회원 구매시 개인정보 수집 이용동의
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark">
          결제수단 선택
        </h3>
      </CardTemplate>
    </PageLayout>
  )
}

export default Payment
