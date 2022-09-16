import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useGetProductsList } from '../hooks/useProductLists'
import CardContainer from './../CardContainer'

function AllProductList() {
  const { state } = useLocation()

  // useGetProductsList(state as string)

  return (
    <div className="">
      <CardContainer />
      <button>More</button>
    </div>
  )
}

export default AllProductList
