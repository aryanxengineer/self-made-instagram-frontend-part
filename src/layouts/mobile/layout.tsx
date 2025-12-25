import { Link, Outlet } from "react-router-dom"
import mobileNavData from "@/assets/data/mobileNavData";

const layout = ({ width }: { width: number }) => {

  return (
    <div className={`relative max-w-[${width}px] h-screen bg-gray-900 text-white`}>
      <div className="w-full h-full overflow-y-auto">
        <Outlet />
      </div>
      <nav className="w-full bg-black flex justify-between items-center gap-4 py-3 px-5 fixed bottom-0">
        {mobileNavData.map(({ id, Icon, path }) => (
          <span key={id}>
            <Link to={path}>
              <Icon size={18} color="white" />
            </Link>
          </span>
        ))}
      </nav>
    </div>
  )
}

export default layout