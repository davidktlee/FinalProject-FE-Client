import React from 'react';
import { Link } from 'react-router-dom';

const CartBuyInfo = () => {
  return (
    <div className="flex flex-col items-center mt-[52px] text-lenssisGray font-semibold gap-4">
    <p className="">3,000円 이상 구매 시 무료 배송</p>
    <Link to="/">
      <span className="underline">쇼핑 계속</span>
    </Link>
  </div>
  );
};

export default React.memo(CartBuyInfo);