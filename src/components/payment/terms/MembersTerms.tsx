import React, { useState } from 'react';
import TermsDropdownButton from './TermsDropdownButton';

const MembersTerms = () => {
  const [showTerms,setShowTerms] = useState(false)
  const showTermsHandler = () => {
    setShowTerms(prev => !prev)
  }
  return (
    <div className='relative'>
      <TermsDropdownButton onClick={showTermsHandler} />
      {showTerms && 
      <div className='flex flex-col items-center border border-solid border-lenssisStroke'>
      <p>lenssis</p>
      <p>구매시 환불 불가</p>
      <p>호갱주의</p>
      <p>ㅎㅎ</p>
      </div>}
    </div>
  );
};

export default React.memo(MembersTerms);