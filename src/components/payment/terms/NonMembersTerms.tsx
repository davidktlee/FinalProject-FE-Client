import React, { useState } from 'react';
import CheckBox from '../../common/ui/CheckBox';
import TermsDropdownButton from './TermsDropdownButton';

interface NonMemberTermsProps {
  isChecked:boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const NonMembersTerms = ({isChecked,setIsChecked}:NonMemberTermsProps) => {
  
  return (
    <div className='relative'>
      <TermsDropdownButton />
      <div className='flex items-center gap-2 pt-2'>
        <CheckBox bgColor='bg-lenssisDark' onClick={() => setIsChecked(prev => !prev)} isChecked={isChecked}/>
        <label className='font-bold text-lenssisGray text-xs'>쇼핑몰 이용약관, 비회원 구매시 개인정보수집 및 이용에 모두 동의합니다</label>
      </div>
    </div>
  );
};

export default NonMembersTerms;