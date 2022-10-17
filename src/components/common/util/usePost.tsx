import { ChangeEvent, useCallback } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'

interface usePostProps {
  setFormValue?: any
  setNewFormValue?: any
  setEditFormValue?: any
}

const usePost = ({ setFormValue, setNewFormValue, setEditFormValue }: usePostProps) => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')

  const formChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (setFormValue) {
      const {
        target: { name, value }
      } = e
      setFormValue((prev: any) => ({
        ...prev,
        [name]: value
      }))
    }
    if (setNewFormValue) {
      const {
        target: { name, value }
      } = e
      setNewFormValue((prev: any) => ({
        ...prev,
        [name]: value
      }))
    }
    if (setEditFormValue) {
      const {
        target: { name, value }
      } = e
      setEditFormValue((prev: any) => ({
        ...prev,
        [name]: value
      }))
    }
  }, [])

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
    if (setFormValue) {
      setFormValue((prev: any) => ({
        ...prev,
        postCode: data.zonecode,
        address: fullAddress
      }))
    }
    if (setNewFormValue) {
      setNewFormValue((prev: any) => ({
        ...prev,
        postCode: data.zonecode,
        address: fullAddress
      }))
    }
    if (setEditFormValue) {
      setEditFormValue((prev: any) => ({
        ...prev,
        postCode: data.zonecode,
        address: fullAddress
      }))
    }
  }, [])

  const addressPopupHandler = useCallback(() => {
    open({ onComplete: handleComplete })
  }, [])

  return {
    addressPopupHandler,
    handleComplete,
    formChangeHandler
  }
}

export default usePost
