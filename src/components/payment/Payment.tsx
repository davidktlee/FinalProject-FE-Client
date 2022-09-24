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
// export interface Product {
//   id:number;
//   imageURL:string;
//   lensTitle:string
//   lensColor:string
//   option:string[]
//   price:string
//   orderedAt:string
//   orderNumber:number
//   shippingStatus:string
// }

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
  const [formValue, setFormValue] = useState<PaymentFormValueType>({
    orderer: user?.name || '',
    postCode: user?.postCode || 0,
    address: user?.address || '',
    phone: user?.phone || '',
    email: user?.email || '',
    detailAddress: ''
  })
  const [emailFormValue, setEmailFormValue] = useState({
    emailIdentity: '',
    emailDomain: ''
  })
  const [isOpen, setIsOpen] = useState(false)
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
    console.log(emailFormValue)
  }
  const emailDomainSelectHandler = (domain: string) => {
    setEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }
  return (
    <PageLayout innerTop="xs:top-1/2 top-1/3" layoutWidth="[90%]">
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
        <h3 className="w-full pb-1 font-bold border-b border-solid border-lenssisDark">주문서 작성</h3>
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
              type="number"
              className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
            />
            <span>&nbsp; - &nbsp;</span>
            <input
              type="number"
              className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
            />
            <span>&nbsp; - &nbsp;</span>
            <input
              type="number"
              className="flex-1 border border-solid border-gray-200 h-10 rounded-md max-w-[80px] xs:max-w-[120px]"
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
      </CardTemplate>
      <CardTemplate title="주문/결제" isTitleVisible={false}>
        <h3 className="w-full pb-1 text-lenssisDark font-bold border-b border-solid border-lenssisDark">
          배송지 정보
        </h3>
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
