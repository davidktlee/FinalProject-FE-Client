import star from '/assets/star.svg'

const MainReviewCard = () => {
  return (
    <div className=" p-[10px] rounded-[10px] border-lenssisLightStroke border-solid border-[1px]">
      <div>
        <img
          className=" rounded rounded-t-[5px]"
          src="https://user-images.githubusercontent.com/90392240/191562901-054caaf5-0245-44fd-8715-848853dcca4e.png"
        />
      </div>
      <div className="p-2 w-[230px] h-[60px]">
        <p className="text-[14px]">샌드 플러스 그레이 착용</p>
        <p className="text-[#7F7F7F] text-[12px]">@velvet.ineffable</p>
        <img className="" src={star} width="100" alt="star" />
      </div>
    </div>
  )
}

export default MainReviewCard
