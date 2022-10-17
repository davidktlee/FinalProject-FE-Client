const Skeleton = () => {
  return (
    <div className="w-[90%] h-[180px] border-2 rounded-md mx-auto mt-20 p-6">
      <div className="flex animate-pulse flex-row h-[30px] justify-between">
        <div className="flex gap-4">
          <div className="w-[100px] h-6 rounded-md text-gray-300 text-[20px] leading-5">★★★★★</div>
          <div className="w-[40px] bg-lenssisStroke h-6 rounded-md "></div>
        </div>

        <div className="w-[80px] bg-lenssisStroke h-6 rounded-md "></div>
      </div>

      <div className="animate-pulse w-full flex justify-between h-[110px]">
        <div>
          <div className="w-[120px] h-[20px] my-2 bg-lenssisStroke rounded-md"></div>
          <div className="w-[400px] h-[20px] my-2 bg-lenssisStroke rounded-md"></div>
          <div className="w-[380px] h-[20px] my-2 bg-lenssisStroke rounded-md"></div>
          <div className=""></div>
        </div>
        <div className="w-[100px] bg-lenssisStroke h-[100px]  "></div>
      </div>
    </div>
  )
}

export default Skeleton
