import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { currentInquiryState } from '../../../store/currentInquiry';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import useToast from '../../common/toast/hooks/useToast';
import { getStoredToken } from '../../local-storage/userStorage';

export interface NonMemberFormType {
  email:string;
  memberId:0;
  orderId:string;
  orderer:string;
}

export interface NonMemberResponseType {
  
    data: NonMemberDataType[],
    message: string,
    status: number
}

export interface NonMemberDataType{
    orderInfo: NonMemberDataOrderInfoType,
    productInfo: NonMemberDataProductInfoType[]
  }

export interface NonMemberDataOrderInfoType{
  address: string,
  couponId: number,
  detailAddress: string,
  email: string,
  method: number,
  orderCreatedAt: string,
  orderId: number,
  orderer: string,
  phone: string,
  point: number,
  postCode: number,
  receiver: string,
  receiverPhone: string,
  shippingMessage: string,
  status: number,
  totalPrice: number
}
export interface NonMemberDataProductInfoType{
  color: string,
  colorCode: string,
  degree: number,
  discount: number,
  graphicDiameter: number,
  imageUrl: string,
  pcs: number,
  period: number,
  price: number,
  productDetailsId: number,
  productId: number,
  productName: string
}

const getNonMemberInquiry = async(nonMemberForm:NonMemberFormType) => {

  const {data} = await axiosInstance.post<NonMemberResponseType>('/order/info',nonMemberForm)
  return data;
}

const useNonMember = () => {
  const {fireToast} = useToast()
  const [_,setInquiry] = useRecoilState(currentInquiryState)
  const {mutate:getInquiry,isLoading} = useMutation((nonMemberForm:NonMemberFormType) =>getNonMemberInquiry(nonMemberForm),{
    onSuccess: (data) => {
      if(data.data.length < 1){
        fireToast({
          id:'조회성공',
          message:'주문번호, 이름, 이메일을 확인해주세요.',
          position:'top',
          timer:2000,
          type:'warning'
        })
      }else{
        setInquiry(data.data)
      }
      
      
    },
    onError: () => {
      fireToast({
        id:'inquiry failed',
        message:'조회에 실패하였습니다. 다시 시도해주세요',
        position:'bottom',
        timer:2000,
        type:'failed'
      })
    }
  })
  return {getInquiry,isLoading}
};

export default useNonMember;