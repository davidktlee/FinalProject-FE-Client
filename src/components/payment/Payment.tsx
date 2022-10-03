import { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { useRecoilValue } from 'recoil'
import { productState } from '../../store/product'
import { useUser } from '../auth/hooks/useUser'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import OrderPaper from './shipping/OrderPaper'
import NewShippingPaper from './shipping/NewShippingPaper'
import ShippingAreaSelector from './shipping/ShippingAreaSelector'
import ConfirmModal from '../common/ui/ConfirmModal'
import Coupon from './coupon/Coupon'
import NonMembersTerms from './terms/NonMembersTerms'
import MembersTerms from './terms/MembersTerms'
import PaymentMethodSelector from './payment-method/PaymentMethodSelector'

export interface PaymentFormValueType {
  memberId:string | number
  orderer: string
  postCode: number | string
  address: string
  phone: string
  email: string
  detailAddress: string
  userRequestMessage:string;
}
const domainArray = ['google.com', 'naver.com', 'daum.net']


/* {
  data: {
    order:{
      orderer:'주문자',
      ordererPhone:'주문자휴대폰',
      ordererEmail:'주문자이메일주소',
    }
    shipping:{
      reciever:'받는사람',
      address:'기본주소',
      detailAddress:'상세주소',
      recieverPhone:'받는사람휴대폰',
      recieverEmail:'받는사람이메일'
      shippingMessage:'배송요청사항'
    }
    product:{
      ...product
    },
    coupon:'쿠폰id',
    paymentMethod:'결제방법',
    totalPrice:'총결제금액',
    point:'총결제금액의 1%',
  }
} */


const Payment = () => {
  const { user, isLoading } = useUser()
  const product = useRecoilValue(productState)
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  const [emailFormValue, setEmailFormValue] = useState({
    emailIdentity: '',
    emailDomain: ''
  })
  const [phoneFormValue, setPhoneFormValue] = useState<Record<string, string | number>>({
    firstNumber: '010',
    middleNumber: '',
    lastNumber: ''
  })
  const [formValue, setFormValue] = useState<PaymentFormValueType>({
    memberId:0,
    orderer:  '',
    postCode: '',
    address:  '',
    phone:  '',
    email: '',
    detailAddress: '',
    userRequestMessage:'',
  })
  const [isNew, setIsNew] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false);

  const phoneFormValueChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setPhoneFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  },[])
  const handleComplete = useCallback((data: any) => {
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
  },[])

  const addressPopupHandler = useCallback(() => {
    open({ onComplete: handleComplete })
  },[])

  const changeFormHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, value }
    } = e
    setFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  },[])

  const domainSelectHandler = useCallback(() => {
    setIsOpen((prev) => !prev)
  },[])

  const emailChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  },[])

  const emailDomainSelectHandler = useCallback((domain: string) => {
    setEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  },[])

  const selectChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    const {
      target: { value }
    } = e
    console.log(value)

    if(value === 'same'){
      setIsModalOpen(true)
    }
    if(value === 'new'){
      setIsNew(true)
      setIsModalOpen(false)
    }
  },[])
  

  useEffect(() => {
    if(user){
      const splitUserEmail = user.email.split('@')
      const splitUserPhoneFirst = user.phone.substr(0,3)
      const splitUserPhoneMiddle = user.phone.substr(3,4)
      const splitUserPhoneLast = user.phone.substr(7,4)
      setEmailFormValue({
        emailIdentity: splitUserEmail[0],
        emailDomain: splitUserEmail[1]
      })
    setFormValue({
      memberId: user.memberId,
      orderer:  user.name,
      postCode: user.postCode,
      address:  user.address,
      phone:  user.phone,
      email: emailFormValue.emailIdentity + emailFormValue.emailDomain || '',
      detailAddress: user.detailAddress,
      userRequestMessage:''
    })
    setPhoneFormValue({
      firstNumber:splitUserPhoneFirst,
      middleNumber:splitUserPhoneMiddle,
      lastNumber:splitUserPhoneLast,
    })
    }
  },[user])
  
  return (
    <PageLayout innerTop="xs:top-[60%] top-1/2" layoutWidth="w-[90%]" layoutHeight="h-fit">
      
      <ConfirmModal title="배송지 정보" isModalOpen={isModalOpen} onClose={() => {setIsNew(true),setIsModalOpen(false)}} onConfirm={() => setIsNew(false)}><span className=' text-lenssisDark text-lg font-semibold '>주문자 정보와 배송지 정보가 일치하십니까? </span></ConfirmModal>
      
     <CardTemplate title="주문/결제" isTitleVisible={true} marginTop="mt-40">
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


      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
        
      
      
        <h3 className="w-full pb-1 font-bold border-b border-solid border-lenssisDark text-xl">
          주문서 작성
        </h3>
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
          
          visibleEmail
          
        />
      </CardTemplate>


      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
        <h3 className="w-full pb-1 text-xl font-bold border-b border-solid border-lenssisDark">배송지 정보</h3>
        <ShippingAreaSelector selectChangeHandler={selectChangeHandler} isNew={isNew} />
        {!isNew  && (
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
            
            visibleRequest
          />
        )}
        
        {isNew && <NewShippingPaper domainArray={domainArray} isOpen={isOpen} domainSelectHandler={domainSelectHandler} setIsOpen={setIsOpen} open={open} />}
 
       
      </CardTemplate>




{/* 할인코드 'lenssis'로 총 결제금액의 10% 차감될 수 있게끔 처리 */}
      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
        <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark ">
          쿠폰/적립금
        </h3>
        <Coupon />
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
      <h3 className="w-full pb-1 text-lenssisDeepGray font-bold flex items-center gap-2">
          <div className='w-2 h-2 bg-lenssisDeepGray rounded-full' /> 쇼핑몰 이용 약관
        </h3>
        <MembersTerms />
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
      <h3 className="w-full pb-1 text-lenssisDeepGray font-bold flex items-center gap-2">
      <div className='w-2 h-2 bg-lenssisDeepGray rounded-full' /> 비회원 구매시 개인정보 수집 이용동의
        </h3>
        
        <NonMembersTerms />
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false} marginTop="mt-6">
        <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark">
          결제수단 선택
        </h3>
        <PaymentMethodSelector />
      </CardTemplate>
    </PageLayout>
  )
}

export default Payment
