import React, { ReactNode } from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  layoutWidth: string

  innerTop?: string
}

const PageLayout = ({ children, layoutWidth, innerTop }: PageLayoutProps) => {
  return (
    <div className="w-full h-[2146px] bg-[#F4F6F8] text-base ">
      <div
        className={`absolute ${
          innerTop ? innerTop : 'top-1/2'
        } left-1/2 -translate-x-1/2 -translate-y-[15%] w-${layoutWidth || 'full'} h-fit `}
      >
        {children}
      </div>
    </div>
  )
}

export default PageLayout
