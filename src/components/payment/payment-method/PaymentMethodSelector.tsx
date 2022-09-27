import React from 'react';
import Radio from '../../common/ui/Radio';

const PaymentMethodSelector = () => {
  return (
    <div className='flex items-center justify-between xs:justify-center gap-4 mt-4 pb-4 border-b border-solid border-black flex-wrap xs:flex-nowrap'>
     <Radio title='クレジットカード' value='クレジットカード' onChange={() => {}} />
     <Radio onChange={()=>{}} title="コンビニ" value="コンビニ" />
     <Radio onChange={() =>{}} title="銀行振込" value="銀行振込" />
     <Radio onChange={() =>{}} title="PayEasy" value="PayEasy" />
     <Radio onChange={() =>{}} title="あと払いペイディー" value='あと払いペイディー' />
     <Radio onChange={() => {}} value="paypay"><img className='w-24' src="assets/paypay.png" alt="" /></Radio>
      
    </div>
  );
};

export default PaymentMethodSelector;