import {
  Home,
  Search,
  Compass,
  Film,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
} from "lucide-react"

export const sidebarItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Search", icon: Search, url: "/search" },
  { title: "Explore", icon: Compass, url: "/explore" },
  { title: "Reels", icon: Film, url: "/reels" },
  { title: "Messages", icon: MessageCircle, url: "/messages" },
  { title: "Notifications", icon: Heart, url: "/notifications" },
  { title: "Create", icon: PlusSquare, url: "/create" },
  { title: "Profile", icon: User, url: "/profile" },
]


export const chatSidebarItems = [
  { title: "Primary", icon: Home, url: "/" },
  { title: "Secondary", icon: Search, url: "/search" },
  { title: "Premium", icon: Compass, url: "/explore" },
  { title: "Friends", icon: Film, url: "/reels" },
  { title: "Unknown", icon: MessageCircle, url: "/messages" },
  { title: "Followers", icon: Heart, url: "/notifications" },
  { title: "Following", icon: PlusSquare, url: "/create" },
  { title: "Team mates", icon: User, url: "/profile" },
]