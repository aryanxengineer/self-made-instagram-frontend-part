import { MessageSquareTextIcon, Home, Search, User, VideoIcon } from "lucide-react"
import { Link, Outlet } from "react-router-dom"

const layout = () => {

  const mobileNavIcons = [
    { id: "home", path:'/', Icon: Home },
    { id: "search", path:'/search', Icon: Search },
    { id: "reels", path:'/reels', Icon: VideoIcon },
    { id: "chat", path:'/chat', Icon: MessageSquareTextIcon },
    { id: "profile", path:'/profile', Icon: User }
  ];

  return (
    <div className="relative max-w-xl h-screen bg-black">
      <Outlet />
      <nav className="fixed z-50 bottom-0 left-0 right-0 w-full h-12 bg-black py-3 px-5 flex justify-between items-center gap-4">

        {mobileNavIcons.map(({ id, Icon, path }) => (
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