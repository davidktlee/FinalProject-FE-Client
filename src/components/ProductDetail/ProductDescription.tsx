const ProductDescripton = ({ finalProduct }: any) => {
  return (
    <div>
      {finalProduct?.imageUrlList?.slice(4, 6).map((item: any) => (
        <img key={item.imageUrl} className="mx-auto" src={item.imageUrl} />
      ))}
    </div>
  )
}

export default ProductDescripton
