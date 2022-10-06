import React from 'react';

const OrderProductName = () => {
  return (
    <div className="flex w-full justify-between items-center py-2 text-gray-300 text-sm px-2">
            <p className="flex-1 text-center">상품명</p>
            <p className="text-center w-[85px] xs:w-[100px]">수량</p>
            <p className="text-center w-[50px] xs:w-[140px]">판매가</p>
          </div>
  );
};

export default React.memo(OrderProductName);