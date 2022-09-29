import React, { ChangeEvent, HTMLInputTypeAttribute, useCallback, useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useUser } from '../../auth/hooks/useUser';
import ShippingAddress from '../../payment/shipping/ui/ShippingAddress';
import ShippingCard from '../../payment/shipping/ui/ShippingCard';
import ShippingOrderer from '../../payment/shipping/ui/ShippingOrderer';
import useEditProfile from '../hooks/useEditProfile';
import EditProfileInput from '../ui/EditProfileInput';
import SubmitButton from '../ui/SubmitButton';


export interface EditFormValueType {
    name:string
    readname:string
    address:string
    detailAddress:string
    phone:string
    birthday:string
    password:string
    postCode: string | number;
    memberId:number | null
  }

const EditProfile = () => {
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  const {user} = useUser()
  const {editProfile} = useEditProfile()
  const [editFormValue,setEditFormValue] = useState<EditFormValueType>({
    memberId:null,
    name:'',
    readname:'',
    address:'',
    postCode:'',
    detailAddress:'',
    phone:'',
    birthday:'',
    password:''
  })
  const editFormValueChangeHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value,name}} = e;
    setEditFormValue(prev => ({
      ...prev,
      [name]:value
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
    setEditFormValue((prev) => ({
      ...prev,
      postCode: data.zonecode,
      address: fullAddress
    }))
  },[])

  const addressPopupHandler = useCallback(() => {
    open({ onComplete: handleComplete })
  },[])


  const editProfileHandler = () => {
    const obj:EditFormValueType = {
      memberId:editFormValue.memberId,
      address:editFormValue.address,
      birthday:editFormValue.birthday,
      detailAddress:editFormValue.detailAddress,
      name:editFormValue.name,
      password:editFormValue.password,
      phone:editFormValue.phone,
      postCode:editFormValue.postCode,
      readname:editFormValue.readname,
    }
    editProfile(obj);
  }

  useEffect(() => {
    if(!user) return;
    setEditFormValue(prev => ({
      ...prev,
    memberId:user.memberId,
    name:user.name,
    readname:user.readname,
    address:user.address,
    postCode:user.postCode,
    detailAddress:user.detailAddress,
    phone:user.phone,
    birthday:user.birthday,
    }))
  }, [user])

  return (
    <div>
      <ShippingCard title="이름" >
        <EditProfileInput name="name" onChange={editFormValueChangeHandler} value={editFormValue.name} />
      </ShippingCard>
      <ShippingCard title="이름 읽는 법" >
        <EditProfileInput name="readname" onChange={editFormValueChangeHandler} value={editFormValue.readname} />
      </ShippingCard>
      <ShippingCard title="주소">

      <ShippingAddress
        onChange={editFormValueChangeHandler}
        value1={editFormValue.postCode}
        value2={editFormValue.address}
        value3={editFormValue.detailAddress}
        onClick={addressPopupHandler}
      />
      </ShippingCard>
      <ShippingCard title="전화번호" >
        <EditProfileInput type="number" name="phone" onChange={editFormValueChangeHandler} value={editFormValue.phone} />
      </ShippingCard>
      <ShippingCard title="생년월일" >
        <EditProfileInput type="number" name="birthday" onChange={editFormValueChangeHandler} value={editFormValue.birthday} />
      </ShippingCard>
      <ShippingCard title="최종비밀번호 확인" isRequired >
        <EditProfileInput type="password" name="password" onChange={editFormValueChangeHandler} value={editFormValue.password} />
      </ShippingCard>
      
      <SubmitButton onClick={editProfileHandler} />
      
    </div>
  );
};

export default EditProfile;