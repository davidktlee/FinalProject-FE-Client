import React, { ReactNode } from 'react';


interface PageLayoutProps {
  title:string
  children:React.ReactNode
  layoutWidth:string
}

const PageLayout = ({title,children,layoutWidth}:PageLayoutProps) => {
  return (
    <div className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[15%] w-${layoutWidth || 'full'} h-fit bg-white rounded-lg p-10 mt-8 shadow-[0_0_4px] shadow-gray-400/80`}>
      <h3 className="text-[#1B304A] font-bold text-[22px] text-center w-full py-[25px]">{title}</h3>
      {children}
    </div>
  );
};

export default PageLayout;