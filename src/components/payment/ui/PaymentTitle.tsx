import React from 'react';

interface PaymentTitleProps {
  text:string
}

const PaymentTitle = ({text}:PaymentTitleProps) => {
  return (
    <h3 className="w-full pb-1 text-lg xs:text-xl text-lenssisDark font-bold border-b border-solid border-lenssisDark ">
          {text}
        </h3>
  );
};

export default React.memo(PaymentTitle);