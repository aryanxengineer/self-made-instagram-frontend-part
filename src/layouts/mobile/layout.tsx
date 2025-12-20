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
    <div className="relative max-w-xl h-screen bg-black">
      <Outlet />
      <nav className="fixed z-50 bottom-0 left-0 right-0 w-full h-12 bg-black py-3 px-5 flex justify-between items-center gap-4">

        {mobileNavIcons.map(({ id, Icon }) => (
          <span key={id}>
            <Icon size={18} color="white" />
          </span>
        ))}
      </nav>
    </div>
  )
}

export default layout