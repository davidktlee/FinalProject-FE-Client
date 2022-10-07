import { useState, ChangeEvent, useEffect, useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
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
import PaymentTitle from './ui/PaymentTitle'
import TermsTitle from './ui/TermsTitle'
import usePost from '../common/util/usePost'
import OrderProductName from './ui/OrderProductName'
import { selectProduct, shippingFeeState, totalPriceState } from '../../store/selectProduct'

const domainArray = ['google.com', 'naver.com', 'daum.net']

const paymentMethodArray = ['クレジットカード', 'コンビニ', '銀行振込', 'PayEasy', 'あと払いペイディー']

/*{
  "addOrderDetailsRequestList": [
    {
      "pcs": 0,
      "productDetailsId": 0
    }
  ],  
  "couponId": 0,
  "memberId": 0,
  "method": 0,
  "orderer": "string",
  "address": "string",
  "detailAddress": "string",
  "ordererEmail": "string",
  "ordererPhone": "string",
  "point": 0,
  "receiver": "string", receiver = orderer
  "receiverPhone": "string", = ordererPhone
  "shippingMessage": "string",
  "totalPrice": 0
} */
export interface PaymentFormValueType {
  couponId: null | number
  memberId: string | number
  method: null | number
  orderer: string
  address: string
  phone: string
  email: string
  detailAddress: string
  postCode: number | string
  // point - 최종 결제 금액의 1%
  point: number
  totalPrice: number

  shippingMessage: string
}

const Payment = () => {
  const { user, isLoading } = useUser()

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
    couponId: null,
    memberId: '',
    method: null,
    orderer: '',
    address: '',
    phone: '',
    email: '',
    detailAddress: '',
    postCode: '',
    // point - 최종 결제 금액의 1%
    point: 0,
    totalPrice: 0,
    shippingMessage: ''
  })
  const [newFormValue, setNewFormValue] = useState<PaymentFormValueType>({
    memberId: '',
    orderer: '',
    postCode: '',
    address: '',
    phone: '',
    email: '',
    detailAddress: '',
    shippingMessage: '',
    couponId: null,
    method: null,
    point: 0,
    totalPrice: 0
  })
  const [newPhoneFormValue, setNewPhoneFormValue] = useState<Record<string, string | number>>({
    firstNumber: '',
    middleNumber: '',
    lastNumber: ''
  })
  const [newEmailFormValue, setNewEmailFormValue] = useState<Record<string, string>>({
    emailIdentity: '',
    emailDomain: ''
  })
  const { addressPopupHandler, formChangeHandler, handleComplete } = usePost({ setFormValue })
  const [isNew, setIsNew] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('')
  const [paymentMethodNumber, setPaymentMethodNumber] = useState<null | number>(null)
  const [selectedProduct,setSelectedProduct] = useRecoilState(selectProduct)
  const [totalPrice,setTotalPrice] = useRecoilState(totalPriceState)
  // discountCode === COUPON_CODE ? 10%할인 : '입력한 쿠폰 올바르지 않음' => input value 삭제
  const [discountCode, setDisCountCode] = useState('')
  const currentPaymentMethodHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e
    if (value === 'PayPay') {
      setPaymentMethodNumber(5)
      setCurrentPaymentMethod(value)
      return
    } else {
      setPaymentMethodNumber(paymentMethodArray.findIndex((item) => item === value))
      setCurrentPaymentMethod(value)
    }
  }



  const phoneFormValueChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setPhoneFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const changeFormHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      target: { name, value }
    } = e
    setFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const domainSelectHandler = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const emailChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const emailDomainSelectHandler = useCallback((domain: string) => {
    setEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }, [])

  const selectChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e
    console.log(value)

    if (value === 'same') {
      setIsModalOpen(true)
    }
    if (value === 'new') {
      setIsNew(true)
      setIsModalOpen(false)
    }
  }, [])

  
  const paymentHandler = () => {
    if (!isChecked) {
      alert('개인정보 수집 이용에 동의해주세요')
      return
    }
    const extractArray = selectedProduct.map((item) => {
      return {pcs:item.pcs,productDetailsId:item.productDetailsId}
    }) 

    const obj = {
      product: extractArray,
      couponId: 0,
      memberId: user? user.memberId : 0,
      method: paymentMethodNumber,
      orderer: formValue.orderer,
      address: newFormValue.address || formValue.address,
      detailAddress: newFormValue.detailAddress || formValue.detailAddress,
      ordererEmail: formValue.email,
      ordererPhone: formValue.phone,
      point: totalPrice/100,
      receiver: newFormValue.orderer || formValue.orderer,
      receiverPhone: newFormValue.phone || formValue.phone,
      shippingMessage: newFormValue.shippingMessage || formValue.shippingMessage,
      totalPrice: totalPrice
    }
    console.log(obj)
  }

  
  useEffect(() => {
    if (user) {
      const splitUserEmail = user.email.split('@')
      const splitUserPhoneFirst = user.phone.substr(0, 3)
      const splitUserPhoneMiddle = user.phone.substr(3, 4)
      const splitUserPhoneLast = user.phone.substr(7, 4)
      setEmailFormValue({
        emailIdentity: splitUserEmail[0],
        emailDomain: splitUserEmail[1]
      })
      setFormValue({
        memberId: user.memberId,
        orderer: user.name,
        postCode: user.postCode,
        address: user.address,
        phone: user.phone,
        email: emailFormValue.emailIdentity + '@' + emailFormValue.emailDomain || '',
        detailAddress: user.detailAddress,
        shippingMessage: '',
        couponId: null,
        method: null,
        point: 0,
        totalPrice: 0
      })
      setPhoneFormValue({
        firstNumber: splitUserPhoneFirst,
        middleNumber: splitUserPhoneMiddle,
        lastNumber: splitUserPhoneLast
      })
    }
  }, [user])

  return (
    <PageLayout innerTop="xs:top-[60%] top-1/2" layoutWidth="w-[90%]" layoutHeight="h-fit">
      <ConfirmModal
        title="배송지 정보"
        isModalOpen={isModalOpen}
        onClose={() => {
          setIsNew(true), setIsModalOpen(false)
        }}
        onConfirm={() => setIsNew(false)}
      >
        <span className=" text-lenssisDark text-lg font-semibold ">
          주문자 정보와 배송지 정보가 일치하십니까?{' '}
        </span>
      </ConfirmModal>

      <CardTemplate title="주문/결제" isTitleVisible={true} marginTop="mt-40">
        <div className="pb-12">
          <PaymentTitle text="주문 상품" />
          <OrderProductName />
          {/* product api 연결시 item 컴포넌트로 분리 */}
          <div className="flex flex-col w-full gap-4 items-center justify-center">
            {selectedProduct.map((item, index) => (
              <div className="flex w-full border-y border-solid border-gray-300" key={item.name + index}>
                <div className="flex items-center justify-start w-full gap-4 py-4 flex-1">
                  <div className="w-16 xs:w-32 flex items-center h-full">
                    <img src={item.imageUrl} />
                  </div>
                  <div className="flex items-start flex-col ">
                    <div className="text-[#5a5a5a] font-semibold">
                      {item.name} - <span className="text-sm">{item.color}</span>
                    </div>

                    {/* option을 받아야 될 것 같다
                    <div className="text-xs">
                      {item.option.map((option, index) => (
                        <span key={option + index}>{option} /</span>
                      ))}
                    </div> */}
                  </div>
                </div>
                <p className="flex justify-center items-center w-[40px] xs:w-[80px] text-xs xs:text-base">
                  {item.pcs}
                </p>
                <p className="flex justify-center items-center w-[80px] xs:w-[160px] text-xs xs:text-base">
                {((item.price * item.pcs) - (item.price * item.pcs) * (item.discount / 100)).toLocaleString()}円
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardTemplate>

      <CardTemplate title="주문서작성" isTitleVisible={false} marginTop="mt-6">
        <PaymentTitle text="주문서 작성" />
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
      <CardTemplate title="배송지정보" isTitleVisible={false} marginTop="mt-6">
        <PaymentTitle text="배송지 정보" />
        <ShippingAreaSelector selectChangeHandler={selectChangeHandler} isNew={isNew} />
        {!isNew && (
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
        {isNew && (
          <NewShippingPaper
            domainArray={domainArray}
            isOpen={isOpen}
            domainSelectHandler={domainSelectHandler}
            setIsOpen={setIsOpen}
            newEmailFormValue={newEmailFormValue}
            newFormValue={newFormValue}
            newPhoneFormValue={newPhoneFormValue}
            setNewEmailFormValue={setNewEmailFormValue}
            setNewFormValue={setNewFormValue}
            setNewPhoneFormValue={setNewPhoneFormValue}
          />
        )}
      </CardTemplate>

      {/* 할인코드 'lenssis'로 총 결제금액의 10% 차감될 수 있게끔 처리 */}
      <CardTemplate title="쿠폰/적립금" isTitleVisible={false} marginTop="mt-6">
        <PaymentTitle text="쿠폰/적립금" />
        <Coupon />
      </CardTemplate>

      <CardTemplate title="쇼핑몰 이용약관" isTitleVisible={false} marginTop="mt-6">
        <TermsTitle text="쇼핑몰 이용 약관" />
        <MembersTerms />
      </CardTemplate>

      <CardTemplate title="비회원 구매시..." isTitleVisible={false} marginTop="mt-6">
        <TermsTitle text="비회원 구매시 개인정보 수집 이용동의" />
        <NonMembersTerms isChecked={isChecked} setIsChecked={setIsChecked} />
      </CardTemplate>


      <CardTemplate title="결제수단" isTitleVisible={false} marginTop="mt-6">
        <PaymentTitle text="결제수단 선택" />
        <PaymentMethodSelector
          currentPaymentMethod={currentPaymentMethod}
          currentPaymentMethodHandler={currentPaymentMethodHandler}
          paymentMethodArray={paymentMethodArray}
        />
        <div className="flex w-[60%] items-center justify-between my-2 mt-6 mx-auto">
          <button
            className="w-full bg-lenssisDark text-white font-semibold rounded-[5px] h-10"
            onClick={paymentHandler}
          >
            결제하기
          </button>
        </div>
      </CardTemplate>
    </PageLayout>
  )
}

export default Payment
