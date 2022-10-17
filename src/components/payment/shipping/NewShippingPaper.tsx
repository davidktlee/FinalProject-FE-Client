import React, { ChangeEvent } from 'react'
import DeliveryRequest from './DeliveryRequest'
import { PaymentFormValueType } from '../Payment'
import ShippingCard from '../ui/ShippingCard'
import ShippingAddress from '../ui/ShippingAddress'
import ShippingPhone from '../ui/ShippingPhone'
import ShippingEmail from '../ui/ShippingEmail'
import ShippingOrderer from '../ui/ShippingOrderer'
import usePost from '../../common/util/usePost'

interface NewShippingPaperProps {
  domainArray: string[]
  isOpen: boolean
  domainSelectHandler: () => void
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  visibleEmail?: boolean
  newFormValue: PaymentFormValueType
  setNewFormValue: React.Dispatch<React.SetStateAction<PaymentFormValueType>>
  newPhoneFormValue: Record<string, string | number>
  setNewPhoneFormValue: React.Dispatch<React.SetStateAction<Record<string, string | number>>>
  newEmailFormValue: Record<string, string>
  setNewEmailFormValue: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const NewShippingPaper = ({
  domainArray,
  isOpen,
  domainSelectHandler,
  setIsOpen,
  visibleEmail,
  newFormValue,
  newEmailFormValue,
  newPhoneFormValue,
  setNewEmailFormValue,
  setNewFormValue,
  setNewPhoneFormValue
}: NewShippingPaperProps) => {
  const { addressPopupHandler, formChangeHandler: newFormChangeHandler } = usePost({ setNewFormValue })

  const newEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewEmailFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newPhoneFormValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e
    setNewPhoneFormValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const newEmailDomainSelectHandler = (domain: string) => {
    setNewEmailFormValue((prev) => ({
      ...prev,
      emailDomain: domain
    }))
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <ShippingCard title="주문자" isRequired>
        <ShippingOrderer onChange={newFormChangeHandler} value={newFormValue.orderer} />
      </ShippingCard>

      <ShippingCard title="주소" isRequired>
        <ShippingAddress
          onChange={newFormChangeHandler}
          value1={newFormValue.postCode}
          value2={newFormValue.address}
          value3={newFormValue.detailAddress}
          onClick={addressPopupHandler}
        />
      </ShippingCard>

      <ShippingCard title="휴대폰" isRequired>
        <ShippingPhone
          onChange={newPhoneFormValueChangeHandler}
          value1={newPhoneFormValue.firstNumber}
          value2={newPhoneFormValue.middleNumber}
          value3={newPhoneFormValue.lastNumber}
        />
      </ShippingCard>

      {visibleEmail && (
        <ShippingCard title="이메일">
          <ShippingEmail
            domainArray={domainArray}
            emailDomainSelectHandler={newEmailDomainSelectHandler}
            isOpen={isOpen}
            onChange={newEmailChangeHandler}
            onClick={domainSelectHandler}
            value1={newEmailFormValue.emailIdentity}
            value2={newEmailFormValue.emailDomain}
          />
        </ShippingCard>
      )}

      <DeliveryRequest onChange={newFormChangeHandler} value={newFormValue.shippingMessage} />
    </>
  )
}

export default NewShippingPaper
