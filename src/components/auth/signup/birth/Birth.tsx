import { ChangeEvent, useState, useEffect } from 'react'
import {
  validate,
  ValidatorType,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH
} from '../../hooks/validator'
import FormErrorMessage from '../../../common/shared/FormErrorMessage'
import { SignupFormType, SignupRecordType } from '../Signup'

interface BirthProps {
  formValue: SignupFormType
  setFormValue: React.Dispatch<React.SetStateAction<SignupRecordType>>
  changeFormHandler: (e: ChangeEvent<HTMLInputElement>, validator: ValidatorType[]) => void
}

interface ValidValueType {
  [key: string]: {
    isValid: boolean
    value: string
  }
}

const Birth = ({ formValue, setFormValue, changeFormHandler }: BirthProps) => {
  const [isBlur, setIsBlur] = useState(false)
  const [birthValid, setBirthValid] = useState(false)
  const { birthMonth, birthYear, birthDay } = formValue

  const date = new Date()

  const onBlur = () => {
    setIsBlur(true)
  }
  useEffect(() => {
    const validDay = validate(birthDay, [VALIDATOR_MAX(31), VALIDATOR_MIN(1)])
    const validMonth = validate(birthMonth, [VALIDATOR_MAX(12), VALIDATOR_MIN(1)])
    const validYear = validate(birthYear, [VALIDATOR_MAX(date.getFullYear()), VALIDATOR_MIN(1900)])
    if (!birthMonth || !birthYear || !birthDay) {
      setBirthValid(false)
    } else {
      const totalValid = validDay && validMonth && validYear
      setBirthValid(totalValid)
    }
  }, [birthMonth, birthYear, birthDay])

  return (
    <div className="flex flex-col">
      <label>
        <span className="block py-1 font-semibold">생년월일</span>
      </label>
      <div className="flex items-center gap-x-4 justify-start max-w-[400px]">
        <div className="grow w-[100px] flex items-center gap-1 ">
          <input
            name="birthYear"
            onChange={(e) => changeFormHandler(e, [VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(5)])}
            value={formValue.birthYear}
            type="number"
            className="h-10 border border-solid border-gray-200 rounded-[5px] min-w-[60px] max-w-[80px]  focus:outline-1 focus:outline-[#ABC8DF]"
            onBlur={onBlur}
          />
          <label className="">년</label>
        </div>

        <div className="grow w-[80px] flex items-center gap-1">
          <input
            name="birthMonth"
            onChange={(e) => changeFormHandler(e, [VALIDATOR_MIN(1), VALIDATOR_MAX(12)])}
            value={formValue.birthMonth}
            type="number"
            className="h-10 border border-solid border-gray-200 rounded-[5px] min-w-[60px] max-w-[60px]  focus:outline-1 focus:outline-[#ABC8DF]"
            onBlur={onBlur}
          />
          <span className="">월</span>
        </div>

        <div className="grow w-[80px] flex items-center gap-1">
          <input
            name="birthDay"
            onChange={(e) => changeFormHandler(e, [VALIDATOR_MINLENGTH(1), VALIDATOR_MAXLENGTH(31)])}
            value={formValue.birthDay}
            type="number"
            className="h-10 border border-solid border-gray-200 rounded-[5px] min-w-[60px] max-w-[60px]  focus:outline-1 focus:outline-[#ABC8DF]"
            onBlur={onBlur}
          />
          <span className="">일</span>
        </div>
      </div>
      {isBlur && !birthValid && (
        <FormErrorMessage errorTitle="생년월일" errorText="생년월일은 (YYYY.MM.DD) 형식입니다." />
      )}
    </div>
  )
}

export default Birth
