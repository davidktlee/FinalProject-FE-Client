import React from 'react'

const Skeleton = () => {
  return (
    <div className="container pt-44 pb-10 mx-auto ">
      <div className="max-w-[1180px] lg:w-full mx-auto flex flex-wrap drop-shadow-basic rounded-[10px] p-8 xs-max:w-[95%] xs-max:px-[18px] bg-white">
        <div className=" animate-pulse md:flex-row lg:flex-col lg:w-1/2 w-full lg:h-auto flex flex-col gap-4">
          <div className="xs:hidden text-center text-[20px] text-lenssisDark font-bold"></div>
          <div className="w-[465px] h-[460px] bg-lenssisStroke mx-auto"></div>
          <div className="overflow-auto flex xs:justify-between sm:justify-center md:justify-between lg:justify-between gap-3 md:mx-auto md:flex-col lg:gap-[14px] lg:flex-row xl:w-[460px] xl:mx-auto xl:gap-[14.2px] xs-max:w-[320px] xs-max:mx-auto xs-max:gap-2">
            <div className="bg-lenssisStroke rounded h-[105px] xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"></div>
            <div className="bg-lenssisStroke rounded h-[105px] xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"></div>
            <div className="bg-lenssisStroke rounded h-[105px] xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"></div>
            <div className="bg-lenssisStroke rounded h-[105px] xs-max:w-[74px] xs:w-[74px] sm:w-[105px]"></div>
          </div>
        </div>
        <div className=" animate-pulse lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0">
          <h2 className=" bg-lenssisStroke mb-2 w-[75px] h-[15px] rounded-md"></h2>
          <div className="mb-2 flex justify-between">
            <span className="bg-lenssisStroke w-[200px] rounded-md"></span>
            <div className="button bg-lenssisStroke w-[35px] h-[35px] rounded-full"></div>
          </div>
          <div className="leading-relaxed ">
            <div className="price bg-lenssisStroke w-[60px] h-[25px] rounded-md"></div>
            <div className="divider animate-pulse h-[1px] bg-lenssisStroke my-2 xs-max:hidden"></div>
            <div className="point flex flex-initial my-2 ">
              <p className="bg-lenssisStroke w-[60px] xs-max:w-[50px] lg:w-[80px]"></p>
              <p className="bg-lenssisStroke w-[240px h-[20px]]"></p>
            </div>
            <div className="point flex flex-initial my-2 ">
              <p className="bg-lenssisStroke w-[60px] xs-max:w-[50px] lg:w-[80px]"></p>
              <p className="bg-lenssisStroke w-[240px h-[20px]]"></p>
            </div>
            <div className="point flex flex-initial my-2 ">
              <p className="bg-lenssisStroke w-[60px] xs-max:w-[50px] lg:w-[80px]"></p>
              <p className="bg-lenssisStroke w-[240px h-[20px]]"></p>
            </div>
            <div className="divider h-[1px] animate-pulse bg-lenssisStroke mt-2 mb-4 sm:hidden"></div>
            <div className="divider"></div>
            <div className="flex gap-20 my-2">
              <div className="bg-lenssisStroke rounded-md w-[70px] h-[30px] xs-max:w-[50px] lg:w-[90px]"></div>
              <div className="bg-lenssisStroke rounded-md w-[200px] h-[30px]"></div>
            </div>
            <div className="flex gap-20 my-2">
              <div className="bg-lenssisStroke rounded-md w-[70px] h-[30px] xs-max:w-[50px] lg:w-[90px]"></div>
              <div className="bg-lenssisStroke rounded-md w-[200px] h-[30px]"></div>
            </div>
            <div className="flex gap-20 my-2">
              <div className="bg-lenssisStroke rounded-md w-[70px] h-[30px] xs-max:w-[50px] lg:w-[90px]"></div>
              <div className="bg-lenssisStroke rounded-md w-[200px] h-[30px]"></div>
            </div>
            <div className="pt-2 flex">
              <p className="bg-lenssisStroke h-[30px] mr-20 rounded-md w-[70px] xs-max:w-[50px] lg:w-[90px]"></p>
              <div className="color flex gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-lenssisStroke" />
                <div className="w-[30px] h-[30px] rounded-full bg-lenssisStroke" />
                <div className="w-[30px] h-[30px] rounded-full bg-lenssisStroke" />
                <div className="w-[30px] h-[30px] rounded-full bg-lenssisStroke" />
              </div>
            </div>
            <div className="delivery flex my-2 pt-4">
              <p className="bg-lenssisStroke w-[70px] h-[30px] mr-16 xs-max:w-[70px] lg:w-[90px] rounded-md"></p>
              <div className="ml-[14px] badge flex gap-[5px] lg:flex-wrap lg:w-[280px] xl:w-[415px]">
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
                <div className="w-[55px] h-[30px]  bg-lenssisStroke rounded-[20px] px-2"></div>
              </div>
            </div>
          </div>
          <div className="bg-lenssisStroke w-[90px] rounded-md flex mt-6 items-center border-b-2 border-gray-100 mb-5">
            <div className="flex ">
              <span className=" text-black w-[130px] xs-max:w-[70px] lg:w-[160px] text-[14px]"></span>
            </div>
            <div className="">
              <div className="border-solid border-[1px] border-r-0 border-lenssisStroke bg-lenssisStroke w-[200px] h-[30px] rounded-[5px] pl-[20px] appearance-none bg-[url('/assets/selectArrow.svg')] bg-no-repeat bg-right"></div>
            </div>
          </div>
          <div className="flex justify-between py-2">
            <span className="leading-10 text-black text-[16px] font-bold"></span>
            <span className="title-font text-[25px] text-black font-bold"></span>
          </div>
          <div className="divder h-[2px] bg-lenssisStroke my-2"></div>
          <div className="flex gap-4 xs-max:flex-col py-2">
            <button className="w-1/2 cursor-pointer h-[45px] bg-lenssisStroke text-black text-[14px] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded xs-max:w-full"></button>
            <button className="w-1/2 cursor-pointer h-[45px] bg-lenssisStroke text-[14px] border-0 ring-1 ring-gray-300 py-2 px-6 focus:outline-none rounded xs-max:w-full"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
