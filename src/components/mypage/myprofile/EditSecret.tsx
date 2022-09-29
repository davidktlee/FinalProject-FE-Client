import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useUser } from '../../auth/hooks/useUser';
import ShippingCard from '../../payment/shipping/ui/ShippingCard';
import useEditSecret from '../hooks/useEditSecret';
import EditProfileInput from '../ui/EditProfileInput';
import SubmitButton from '../ui/SubmitButton';

export interface EditPasswordFormType {
  newPassword:string,
  newPasswordConfirm:string,
  password:string
}

const EditSecret = () => {
  const {user} = useUser()
  const updateSecret = useEditSecret()
  const [editFormValue,setEditFormValue] = useState<EditPasswordFormType>({
    newPassword:'',
    newPasswordConfirm:'',
    password:''
  })
  const editFormValueChangeHandler = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value,name}} = e;
    setEditFormValue(prev => ({
      ...prev,
      [name]:value
    }))
  },[editFormValue])

  const updateSecretHandler = () => {
    const obj:EditPasswordFormType = {
      newPassword:editFormValue.newPassword,
      newPasswordConfirm:editFormValue.newPasswordConfirm,
      password:editFormValue.password
    }
    updateSecret(obj);
  }
  
  return (
    <div>
      <ShippingCard title="비밀번호 변경">
        <div className='flex flex-col w-full gap-2'>
        <EditProfileInput type="password" onChange={editFormValueChangeHandler} name="newPassword" value={editFormValue.newPassword} placeholder="새 비밀번호" />
        <EditProfileInput type="password" onChange={editFormValueChangeHandler} name="newPasswordConfirm" value={editFormValue.newPasswordConfirm} placeholder="새 비밀번호 확인" />
        </div>
      </ShippingCard>
      <ShippingCard title="최종비밀번호 확인" isRequired >
        <EditProfileInput type="password" name="password" onChange={editFormValueChangeHandler} value={editFormValue.password} placeholder="기존 비밀번호" />
      </ShippingCard>
      <SubmitButton onClick={updateSecretHandler} />
    </div>
  );
};

export default EditSecret;