import Card from '../common/Card'
import { useGetFavoriteOneday } from '../main/hooks/useFavorite'

const OneDayFavorite = () => {
  const data = useGetFavoriteOneday()
  console.log(data)

  return (
    <div>
      <div className="pt-2 grid grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 w-[95%] mx-auto gap-x-[20px]">
        {data?.map((item, index) => (
          <Card
            key={item.productInfo.productId}
            idx={index}
            colorAndImage={item.colorAndImageInfo}
            productId={item.productInfo.productId}
            series={item.productInfo.productName}
            price={item.productInfo.price}
            discount={item.productInfo.discount}
            graphicDiameter={item.graphicDiameter}
            isFavorite={1}
          />
        ))}
      </div>
    </div>
  )
}

export default OneDayFavorite
