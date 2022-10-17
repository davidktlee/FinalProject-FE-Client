import React from 'react'
import CardLayout from '../common/CardLayout'
import useCoupon from '../hooks/useCoupon'

const MyCoupon = () => {
  const { coupon } = useCoupon()

  return (
    <CardLayout title="쿠폰함">
      <div className="flex xs:flex-wrap xs:flex-row flex-col gap-4 mx-auto xs:justify-end">
        {coupon.map((item) => (
          <div
            className="text-xs  xs:text-sm flex flex-col gap-2 border border-solid border-gray-400 p-2 mt-4 w-full xs:w-[45%]"
            key={item.couponId}
          >
            <p className="font-semibold text-lenssisDark">{item.expiredDate}까지 사용 가능</p>
            <p className="text-sm font-bold pb-2 border-b border-solid border-gray-400">{item.couponType}</p>
            <p className="pt-2 text-[#7a7a7a]">
              {item.discountRate !== 0 ? `${item.discountRate}% 할인` : `${item.discount}円 할인`}
            </p>
          </div>
        ))}
      </div>
    </CardLayout>
  )
}

export default MyCoupon
