import React from 'react';


interface CardTemplateProps {
  children:React.ReactNode
  title:string;
  isTitleVisible?:boolean
}

const CardTemplate = ({children,isTitleVisible,title}:CardTemplateProps) => {
  return (
    <div className='shadow-[0_0_6px] bg-white rounded-lg p-2 xs:p-10 mt-8 shadow-gray-400/80'>
      {isTitleVisible && <h3 className="text-[#1B304A] font-bold text-[22px] text-center w-full py-[25px]">{title}</h3>}
      {children}
    </div>
  );
};

export default CardTemplate;