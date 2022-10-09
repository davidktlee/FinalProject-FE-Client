import { AxiosResponse } from 'axios';
import React from 'react';
import { useQueries, useQuery } from 'react-query';
import { axiosInstance, getJWTToken } from '../../axiosinstance';
import { getStoredToken } from '../../local-storage/userStorage';
import { queryKeys } from '../../react-query/queryKeys';



interface CounponResponse {
  data :  CouponTypes[]
}

interface CouponTypes {
    couponId:number;
    couponType: number;
    discount: number,
    discountRate: number,
    expiredDate: string
    minPrice: number
    status: number
  }


const getCouponList = async() => {
  const token = getStoredToken()
  const {data:{data}} = await axiosInstance.get<AxiosResponse<CouponTypes[]>>('/coupon/list',{
    headers: getJWTToken(token)
  })

  return data
}


const useCoupon = () => {
  const fallback:CouponTypes[] = []
  const {data:coupon = fallback,isLoading} = useQuery(queryKeys.coupon,getCouponList)

  return {coupon,isLoading}
};

export default useCoupon;