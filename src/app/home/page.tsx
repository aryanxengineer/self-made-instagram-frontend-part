// import ReelHeader from "@/components/modules/ReelHeader";
// import {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardAction,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";

import { Heart, Plus } from "lucide-react"


const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white">
      <header className="w-full h-10 bg-black flex justify-between items-center px-5">
        <div>
          <h3>Instagram</h3>
        </div>
        <div className="flex items-center gap-5">
          <span>
            <Plus size={24} color="white" />
          </span>
          <span>
            <Heart size={24} color="white" />
          </span>
        </div>
      </header>
    </div>
  )
}

export default Home