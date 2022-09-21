import React, { ReactNode } from 'react'

interface PageLayoutProps {
<<<<<<< HEAD
  title: string
  children: React.ReactNode
  layoutWidth: string
  isTitleVisible?: boolean
}

const PageLayout = ({ title, children, layoutWidth, isTitleVisible }: PageLayoutProps) => {
  return (
    <div className="w-full h-[1846px] bg-[#F4F6F8] text-base ">
      <div
        className={`absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-[15%] w-${
          layoutWidth || 'full'
        } h-fit bg-white rounded-lg p-10 mt-8 shadow-[0_0_6px] shadow-gray-400/80`}
      >
        {isTitleVisible && (
          <h3 className="text-[#1B304A] font-bold text-[22px] text-center w-full py-[25px]">{title}</h3>
        )}
        {children}
      </div>
=======
  
  children:React.ReactNode
  layoutWidth:string
  
  innerTop?:string
}
  // shadow-[0_0_6px] bg-white rounded-lg p-10 mt-8  shadow-gray-400/80
const PageLayout = ({children,layoutWidth,innerTop}:PageLayoutProps) => {
  return (
    <div className="w-full h-[1846px] bg-[#F4F6F8] text-base ">
    <div className={`absolute ${innerTop ? innerTop : 'top-1/2'} left-1/2 -translate-x-1/2 -translate-y-[15%] w-${layoutWidth || 'full'} h-fit `}>
      {children}
>>>>>>> 76ec295b98e91f535fdde9ade3e622c62fc320be
    </div>
  )
}

export default PageLayout
