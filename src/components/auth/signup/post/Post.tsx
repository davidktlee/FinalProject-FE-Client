import { useState, ChangeEvent } from 'react'
import Input from '../../../common/Input'
import { SignupFormType,SignupRecordType } from '../Signup'
import {
  ValidatorType,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../hooks/validator'
import FormErrorMessage from '../../shared/FormErrorMessage'


interface PostProps {
  formValue: SignupFormType
  setFormValue: React.Dispatch<React.SetStateAction<SignupRecordType>>
  changeFormHandler: (e: ChangeEvent<HTMLInputElement>, validator: ValidatorType[]) => void
  addressPopupHandler: () => void
}

const Post = ({ formValue, setFormValue, changeFormHandler,addressPopupHandler }: PostProps) => {
  const [isBlur, setIsBlur] = useState(false)



  const onBlur = () => {
    setIsBlur(true)
  }
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <label className="">우편번호</label>
        <div className="flex justify-start items-center gap-2">
          <input
            name="postCode"
            onChange={(e) => changeFormHandler(e, [VALIDATOR_REQUIRE()])}
            value={formValue.postCode.value}
            type="text"
            className="grow h-10 border border-solid border-gray-200 rounded-md max-w-[400px]"
            readOnly
            onBlur={onBlur}
          />
          <div className="grow">
            <button
              className="w-40 h-11 bg-[#3e6d87] rounded-md text-white font-bold border-none cursor-pointer"
              onClick={addressPopupHandler}
            >
              우편 번호 검색
            </button>
          </div>
        </div>
        <div>{isBlur && !formValue.postCode.isValid && <FormErrorMessage errorTitle='우편번호누락' errorText='우편 번호 검색을 통해 주소를 입력해주세요.' />}</div>
      </div>

      <Input
        name="address"
        name2="detailAddress"
        onChange={(e) => changeFormHandler(e, [VALIDATOR_REQUIRE()])}
        value={formValue.address.value}
        value2={formValue.detailAddress.value}
        type="text"
        type2="text"
        double={true}
        label="주소"
        isRequired={false}
        flexDirection="vertical"
        placeholder="기본 주소"
        placeholder2="상세 주소"
        inputWidth="[400px]"
        inputHeight="10"
        readonly={true}
        validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(30)]}
        errorText="상세 주소를 입력해주세요"
      />
    </>
  )
}

export default Post
