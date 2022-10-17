import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="min-w-[200px] xs:min-w-fit px-[2px] w-full ">
      <Link to="/" className="text-2xl font-bold text-left mx-auto h-10">
        <svg className="mx-auto" width={120} height={26} xmlns="http://www.w3.org/2000/svg">
          <image href="/assets/logo.svg" />
        </svg>
      </Link>
    </div>
  )
}

export default Logo
