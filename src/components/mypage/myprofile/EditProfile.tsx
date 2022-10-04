import React, { ChangeEvent, HTMLInputTypeAttribute, useCallback, useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useUser } from '../../auth/hooks/useUser';
import usePost from '../../common/util/usePost';
import ShippingAddress from '../../payment/ui/ShippingAddress';
import ShippingCard from '../../payment/ui/ShippingCard';
import ShippingOrderer from '../../payment/ui/ShippingOrderer';
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
  
  const {addressPopupHandler,formChangeHandler:editFormValueChangeHandler} = usePost({setEditFormValue})
  
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