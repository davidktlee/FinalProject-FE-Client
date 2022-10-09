import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentInquiryState } from '../../../store/currentInquiry';
import useNonMember, { NonMemberDataType } from '../hooks/useNonMember';


interface LocationState {
  state:NonMemberDataType[];
}

const NonMemberInquiry = () => {
  const {state} = useLocation() as LocationState

  
  console.log(state);
  return (
    <div className='mt-40'>
      <div>
        {state.map((item) => (
          <p key={item.orderInfo.orderCreatedAt}>{item.orderInfo.orderCreatedAt}</p>
        ))}
      </div>
    </div>
  );
};

export default NonMemberInquiry;