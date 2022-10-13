<<<<<<< HEAD
import { useQuery } from 'react-query'
import { axiosInstance, getJWTToken } from '../../axiosinstance'
import { getStoredToken } from '../../local-storage/userStorage'

export const getOrder = async (email: string, memberId: number) => {
  const token = getStoredToken()
  const { data } = await axiosInstance({
    url: '/order/info',
    method: 'POST',
    headers: getJWTToken(token),
    data: {
      email,
      memberId
    }
  })
  return data.data
}

export const useOrderList = (email: string, memberId: number) => {
  const { data: orderList } = useQuery('orderList', () => getOrder(email, memberId), {
    enabled: !!email && !!memberId
  })
  return { orderList }
}
=======
import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { myPurchaseState } from '../../../store/myPurchase';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { getStoredToken } from '../../local-storage/userStorage';


interface orderRequestType {
  email:string;
  memberId:number;
  orderId:number;
  orderer:string;
}

export interface purchaseListType {
  data: InfoType[]
}

export interface InfoType {
  orderInfo: orderInfoType
  productInfo : productInfoType[]
}
interface orderInfoType{
  address:string
  couponId:number
  detailAddress:string
  email:string
  method: number
  orderCreatedAt:string
  orderId: number
  orderer:string
  phone:string
  point: number
  postCode: number
  receiver:string
  receiverPhone:string
  shippingMessage:string
  status: number
  totalPrice: number
}
interface productInfoType {
  color:string;
  colorCode:string;
  degree:number
  discount: number
  graphicDiameter: number
  imageUrl:string;
  pcs: number
  period: number
  price: number
  productDetailsId: number
  productId: number
  productName:string;
}

const getMyOrder = async ({email,memberId,orderId,orderer}:orderRequestType) => {
  const token = getStoredToken()
  
  const {data} = await axiosInstance.post<purchaseListType>('/order/info',{email,memberId,orderId,orderer},{
    headers:getJWTToken(token)
  })
  return data.data
}


const useOrder = () => {
  const [myPurchase,setMyPurchase] = useRecoilState(myPurchaseState)
  const {mutate:getMyOrders} = useMutation((orderInfo:orderRequestType) => getMyOrder(orderInfo),{
    onSuccess: (data) => {
      setMyPurchase(data)
    }
  })

  return {getMyOrders}
};

export default useOrder;
>>>>>>> be0578203a8274ccc9a6ee509c66f6ad584017a1
