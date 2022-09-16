import React from 'react'
import CardContainer from '../CardContainer'
import { useLocation } from 'react-router'
import { useGetProductsList } from '../hooks/useProductLists'

function OneDayProductList() {
  const { state } = useLocation()

  useGetProductsList(state as string)
  return (
    <div>
      <CardContainer />
    </div>
  )
}

export default OneDayProductList
