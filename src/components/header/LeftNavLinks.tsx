
import { NavLink } from 'react-router-dom';

const LeftNavLinks = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <NavLink to="/" className="text-sm font-bold min-w-[64px] hover:text-[#0B0954]">전체상품</NavLink>
      <NavLink to="/event" className="text-sm font-bold min-w-[60px] hover:text-[#0B0954]">이벤트</NavLink>
      <NavLink to="/review" className="text-sm font-bold min-w-[60px] hover:text-[#0B0954]">리뷰</NavLink>
    </div>
  );
};

export default LeftNavLinks;