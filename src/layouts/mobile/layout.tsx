import { MessageSquareTextIcon, Home, Search, User, VideoIcon } from "lucide-react"
import { Outlet } from "react-router-dom"

const layout = () => {

  const mobileNavIcons = [
    { id: "home", Icon: Home },
    { id: "search", Icon: Search },
    { id: "reels", Icon: VideoIcon },
    { id: "messages", Icon: MessageSquareTextIcon },
    { id: "profile", Icon: User }
  ];

  return (
    <div className="relative max-w-xl h-screen bg-gray-800">
      <Outlet />
      <nav className="absolute z-50 bottom-0 w-full h-12 py-3 px-10 bg-black flex justify-between items-center">

        {mobileNavIcons.map(({ id, Icon }) => (
          <span key={id}>
            <Icon size={24} color="white" />
          </span>
        ))}
      </nav>
    </div>
  )
}

export default layout