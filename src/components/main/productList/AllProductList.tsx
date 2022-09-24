import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useGetProductsList } from '../hooks/useProductLists'
import CardContainer from './../CardContainer'

function AllProductList() {
  const { state } = useLocation()

  // useGetProductsList(state as string)

  return (
    <>
      
      <div className="py-4">More</div>
    </>
  )
}

export default AllProductList
