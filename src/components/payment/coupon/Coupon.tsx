import ShippingCard from '../ui/ShippingCard'

const Coupon = () => {
  return (
    <>
      <ShippingCard title="할인코드 적용">
        <div className={`flex items-start justify-start w-full gap-x-2 xs:gap-x-0`}>
          <input
            name="coupon"
            onChange={() => {}}
            value=""
            className={`w-full h-12 border border-solid border-gray-200 rounded-[5px] max-w-[310px] pl-1 focus:outline-1 focus:outline-[#ABC8DF]`}
            type="text"
          />
          <button className="w-[120px] h-12 bg-lenssisDark text-white font-bold rounded-[5px] ml-1">
            적용
          </button>
        </div>
      </ShippingCard>
      <ShippingCard title="쿠폰 등록">
        <button className="w-full xs:w-[200px] h-12 bg-lenssisDark text-white font-bold rounded-[5px] ">
          쿠폰 등록
        </button>
      </ShippingCard>
    </>
  )
}

export default Coupon
