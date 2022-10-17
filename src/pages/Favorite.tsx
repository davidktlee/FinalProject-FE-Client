import { useEffect } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const Favorite = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/favorite/all')
  }, [])

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="max-w-[1180px] container pt-44 pb-10 mx-auto ">
          <div className="lg:w-full mx-auto flex flex-wrap py-8 drop-shadow-basic xs-max:w-[95%] ">
            <div className="bg-white w-full dorp-shadow-basic rounded-[5px] px-[40px] py-[20px] xs-max:px-[10px]">
              <div className="text-center mt-6 mb-6 font-bold">즐겨찾기</div>
              <nav className="flex justify-between xs-max:text-[12px]">
                <NavLink
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '3px solid black' : '2px solid #d3d3d3',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#1B304A' : '#d3d3d3'
                  })}
                  to="all"
                  className="flex-1 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-lenssisDeepGray border-solid border-b-[1px] font-medium text-center text-lenssisDark"
                >
                  <span className="text-lenssisDark">전체</span>
                </NavLink>

                <NavLink
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '3px solid black' : '2px solid #d3d3d3',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#1B304A' : '#d3d3d3'
                  })}
                  to="monthly"
                  className="flex-1 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-lenssisDeepGray border-solid border-b-2 font-medium text-center text-lenssisDark"
                >
                  <span className="text-lenssisDark">먼슬리</span>
                </NavLink>

                <NavLink
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '3px solid black' : '2px solid #d3d3d3',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#1B304A' : '#d3d3d3'
                  })}
                  to="oneDay"
                  className="flex-1 xs-max:px-2 py-4 px-6 block hover:text-[#030303] focus:outline-none border-lenssisDeepGray border-solid border-b-2 font-medium text-center"
                >
                  <span className="text-lenssisDark">원데이</span>
                </NavLink>
              </nav>
              <div className="flex justify-end mt-6 xs-max:text-[14px]">
                <div>
                  <button>최근 찜한 순</button>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Favorite
