import { ChangeEvent, useState } from 'react';
import NavSearch from './NavSearch'
import RightNavLinks from './RightNavLinks'

const RightSection = () => {

  const [searchValue,setSearchValue] = useState('');

  const searchValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {target:{value}} = e;
    setSearchValue(value)
  }

  return (
    <div className="flex items-center gap-4">
      <NavSearch searchValueHandler={searchValueHandler} searchValue={searchValue} />
      <RightNavLinks />
    </div>
  )
}

export default RightSection
