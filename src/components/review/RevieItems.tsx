import React from 'react'

const RevieItems = () => {
  return (
    <div className="w-full">
      <div className="flex-col">
        <div className="flex w-full">
          <div className="flex gap-2">
            <div>★★★★★</div>
            <div>아이디</div>
          </div>
          <div>2022.09.16</div>
        </div>
        <div className="w-full">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
            poutine.
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RevieItems
