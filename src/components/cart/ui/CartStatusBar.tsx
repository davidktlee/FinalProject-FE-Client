import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectProduct } from '../../../store/selectProduct';
import CheckBox from '../../common/ui/CheckBox';
import { CartItemsType } from '../hooks/useCart';
import CartPriceInfo from './CartPriceInfo';

interface CartStatusBarProps {
  isTotalChecked:boolean;
  totalCheckedHandler:() => void;
  products:CartItemsType[]
}

const CartStatusBar = ({isTotalChecked,totalCheckedHandler,products}:CartStatusBarProps) => {
  const selectedProduct = useRecoilValue(selectProduct)
  return (
    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0 w-full py-4 border-y border-solid border-lenssisStroke text-xs xs:text-base ">
              <div className="flex items-center pl-4">
                {isTotalChecked && (
                  <CheckBox
                    onClick={totalCheckedHandler}
                    bgColor="bg-lenssisDark"
                    isChecked={isTotalChecked}
                  />
                )}
                {!isTotalChecked && <CheckBox onClick={totalCheckedHandler} bgColor="bg-lenssisStroke" />}

                <label className={`${isTotalChecked || selectedProduct.length === products.length ? 'text-lenssisDark' : 'text-lenssisStroke'} text-base`}>전체선택({selectedProduct.length}/{products.length})</label>
              </div>
              <CartPriceInfo />
            </div>
  );
};

export default CartStatusBar;