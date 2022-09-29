import React from 'react'

const ProductBanner = () => {
  return (
    <div className="xs-max:hidden">
      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://user-images.githubusercontent.com/90392240/193038938-93328669-886c-4230-9a89-a82e961cae5f.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://user-images.githubusercontent.com/90392240/193038959-6b61377d-05d3-4d0e-a792-5b9418ab4cba.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/3">
              <img
                alt="gallery"
                className="w-full object-cover h-[130px] object-center block rounded-xl drop-shadow-xl"
                src="https://user-images.githubusercontent.com/90392240/193038997-66c01b8f-aa88-4c7b-a82d-c304da9fa295.png"
              />
            </div>
            <div className="md:p-2 p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-[150px] object-cover object-center block rounded-xl drop-shadow-xl"
                src="https://user-images.githubusercontent.com/90392240/193038989-beb726c4-54e2-48bd-957d-fa39f2a3b8d4.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductBanner
