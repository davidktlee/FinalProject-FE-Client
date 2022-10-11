import React from 'react'
import CardTemplate from './common/ui/CardTemplate'
import PageLayout from './common/ui/PageLayout'
import Footer from './footer/Footer'

const NotFound = () => {
  return (
    <>
      <CardTemplate title="ERROR" marginTop="xs-max:mt-[130px]">
        <div className=" flex flex-col justify-center items-center h-[540px]">
          <div className="flex items-center justify-center">
            <div className="w-[10px] h-[10px]  rounded-full bg-lenssisSky"></div>
            <div className="mx-[5px] text-[30px] font-[600]">ERROR</div>
            <div className="w-[10px] h-[10px]  rounded-full bg-lenssisSky"></div>
          </div>
          <div className="mt-[-30px] text-[100px] text-lenssisDark font-[700] ">404</div>
          <div className="text-[24px] mt-[-20px] font-[600] text-lenssisDark border-t-[1px] border-solid border-lenssisLightGray">
            Page Not Found
          </div>
          <div className="text-lenssisSky mt-[10px]">ページが見つかりません。</div>
        </div>
      </CardTemplate>
      <Footer />
    </>
  )
}

export default NotFound
