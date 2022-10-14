import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { searchedProductState } from '../../store/searchedProduct';
import Card from '../common/Card';
import CardTemplate from '../common/ui/CardTemplate';
import PageLayout from '../common/ui/PageLayout';
import { SearchedLensType } from '../header/hooks/useSearch';
import PaymentTitle from '../payment/ui/PaymentTitle';

interface UseLocationStateType {
  state : string
}


const SearchResult = () => {
  const searchedLens = useRecoilValue(searchedProductState);
  const {state} = useLocation() as UseLocationStateType
  const [lens,setLens] = useState<SearchedLensType["data"]["productData"]>([])
  
  useEffect(() => {
    if(!searchedLens) return;
    setLens(searchedLens.data.productData)
  }, [searchedLens])
  console.log(lens);
  return (
    <PageLayout layoutWidth='w-[90%]'>
      <CardTemplate title={`"${state}" 검색결과`} isTitleVisible >
        <PaymentTitle text='검색 상품'/>
        <p className='text-lenssisGray text-sm mt-2 pb-4'>총 {lens.length}개의 검색 결과</p>
        <div className='flex flex-col xs:flex-row w-full'>
        {lens.map((lens,idx) => (
          <Card
          key={`${lens.productId}-${idx}`}
          idx={idx}
          colorAndImage={lens.colorAndImage}
          productId={lens.productId}
          series={lens.series}
          price={lens.price}
          discount={lens.discount}
          graphicDiameter={lens.graphicDiameter}
        />
        ))}
        </div>
      </CardTemplate>
      
    </PageLayout>
  );
};

export default SearchResult;