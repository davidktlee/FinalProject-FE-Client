import React from 'react'
import MobileBoxLayout from '../common/MobileBoxLayout'
import {
  totalDiameter,
  graphicDiameter,
  series,
  features,
  duration,
  colors
} from '../../../../constants/filterData'

const MobileFilter = () => {
  return (
    <div className="bg-[#fff]">
      <MobileBoxLayout title="사용기간" contents={duration} px={'17px'} py={'3px'} w={'80px'} />
      <MobileBoxLayout title="그래픽 직경" contents={graphicDiameter} px={'17px'} py={'3px'} w={'60px'} />
      <MobileBoxLayout title="시리즈" contents={series} px={'17px'} py={'3px'} w={'80px'} />
      <MobileBoxLayout title="색상" contents={colors} w={'25px'} gapX={10} gapY={4} h={'25px'} />
      <MobileBoxLayout title="특징" contents={features} w={'80px'} py={'3px'} />
      <div className="flex justify-around p-4">
        <button className="w-[290px] h-[40px] text-center bg-lenssisDark text-white rounded-[5px] font-semibold">
          적용하기
        </button>
        <div className="flex justify-center items-center">
          <svg width="22" height="18" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5645 18.875C15.4187 18.875 17.2312 18.3252 18.7729 17.295C20.3146 16.2649 21.5163 14.8007 22.2258 13.0877C22.9354 11.3746 23.121 9.48961 22.7593 7.67103C22.3976 5.85246 21.5047 4.182 20.1936 2.87088C18.8825 1.55976 17.212 0.666879 15.3934 0.305142C13.5749 -0.0565943 11.6899 0.129062 9.9768 0.838634C8.26374 1.54821 6.79956 2.74982 5.76942 4.29153C4.73929 5.83325 4.18945 7.64581 4.18945 9.5V14.3438L1.37695 11.5313L0.283203 12.625L4.9707 17.3125L9.6582 12.625L8.56445 11.5313L5.75195 14.3438V9.5C5.75195 7.95484 6.21015 6.44437 7.0686 5.15961C7.92704 3.87485 9.14719 2.87351 10.5747 2.2822C12.0023 1.69089 13.5731 1.53617 15.0886 1.83762C16.6041 2.13907 17.9961 2.88314 19.0887 3.97573C20.1813 5.06833 20.9254 6.46039 21.2268 7.97586C21.5283 9.49134 21.3736 11.0622 20.7823 12.4897C20.191 13.9173 19.1896 15.1374 17.9048 15.9959C16.6201 16.8543 15.1096 17.3125 13.5645 17.3125V18.875Z"
              fill="#0B0954"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MobileFilter
