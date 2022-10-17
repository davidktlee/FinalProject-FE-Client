import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentInquiryState } from '../../store/currentInquiry'
import { VALIDATOR_REQUIRE } from '../auth/hooks/validator'
import Input from '../common/Input'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import TermsTitle from '../payment/ui/TermsTitle'
import useNonMember, { NonMemberFormType } from './hooks/useNonMember'

const NonMember = () => {
  const { getInquiry } = useNonMember()
  const inquiry = useRecoilValue(currentInquiryState)
  const navigate = useNavigate()
  const [nonMemberInquiryForm, setNonMemberInquiryForm] = useState<NonMemberFormType>({
    memberId: 0,
    orderId: '',
    orderer: '',
    email: ''
  })
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNonMemberInquiryForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const inquiryClickHandler = () => {
    getInquiry(nonMemberInquiryForm)
  }

  useEffect(() => {
    if (inquiry && inquiry.length > 0) {
      navigate(`/nonmember/${inquiry.map((item) => item.orderInfo.orderId)}`, {
        state: inquiry
      })
    }
  }, [inquiry])

  return (
    <PageLayout layoutWidth="w-[90%]">
      <CardTemplate title="비회원 주문배송조회" isTitleVisible>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-[300px] xs:w-[400px] mx-auto">
            <Input
              onChange={onChange}
              double={false}
              errorText="주문번호는 필수 입력사항입니다."
              validators={[VALIDATOR_REQUIRE()]}
              label=""
              placeholder="주문번호"
              type="text"
              name="orderId"
              value={nonMemberInquiryForm.orderId}
              flexDirection="horizontal"
              inputHeight="h-10"
              inputWidth="max-w-full"
              isRequired={false}
              margin="my-0"
            />
            <Input
              onChange={onChange}
              double={false}
              errorText="이름은 필수 입력사항입니다."
              validators={[VALIDATOR_REQUIRE()]}
              label=""
              placeholder="이름"
              type="text"
              name="orderer"
              value={nonMemberInquiryForm.orderer}
              flexDirection="horizontal"
              inputHeight="h-10"
              inputWidth="max-w-full"
              isRequired={false}
              margin="my-0"
            />
            <Input
              onChange={onChange}
              double={false}
              errorText="이메일은 필수 입력사항입니다."
              validators={[VALIDATOR_REQUIRE()]}
              label=""
              placeholder="이메일"
              type="email"
              name="email"
              value={nonMemberInquiryForm.email}
              flexDirection="horizontal"
              inputHeight="h-10"
              inputWidth="max-w-full"
              isRequired={false}
              margin="my-0"
            />
            <button
              className={`bg-lenssisDark text-white border border-solid border-lenssisDark hover:bg-primary-light font-semibold h-[55px] rounded focus:outline-none focus:shadow-outline min-w-[120px] max-w-full w-[400px] mt-[43px] mb-[13px]`}
              onClick={inquiryClickHandler}
            >
              주문배송조회
            </button>
            <div>
              <TermsTitle
                text="비회원 상품을 구매하신 경우에만 주문/배송조회가 가능합니다."
                textsize="text-xs xs:text-sm"
                dotsize="w-[4px] h-[4px]"
                textColor="text-lenssisGray"
              />
              <TermsTitle
                text="2018년 2월 14일 이후 비회원 주문에 한해서 조회가 가능합니다."
                textsize="text-xs xs:text-sm"
                dotsize="w-[4px] h-[4px]"
                textColor="text-lenssisGray"
              />
            </div>
          </div>
        </div>
      </CardTemplate>
    </PageLayout>
  )
}

export default NonMember
