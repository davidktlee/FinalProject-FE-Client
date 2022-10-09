import { AxiosResponse } from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
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
  
    data: [
      {
        orderInfo: {
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
        },
        productInfo: [
          {
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
        ]
      }
    ],
    message: string,
    status: number
}

const getNonMemberInquiry = async(nonMemberForm:NonMemberFormType) => {
  const token = getStoredToken()
  const {data} = await axiosInstance.post<AxiosResponse<NonMemberResponseType>>('/order/info',nonMemberForm,{})
  return data;
}

const useNonMember = () => {
  const {fireToast} = useToast()
  const {mutate:getInquiry} = useMutation((nonMemberForm:NonMemberFormType) =>getNonMemberInquiry(nonMemberForm),{
    onSuccess: () => {
      fireToast({
        id:'조회성공',
        message:'임시토스트',
        position:'top',
        timer:2000,
        type:'success'
      })
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
  return {getInquiry}
};

export default useNonMember;