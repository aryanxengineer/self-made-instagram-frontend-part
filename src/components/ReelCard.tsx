import { Dot, MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import ReelProfileIcon from "./modules/reel/ReelProfileIcon"
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardContent,
} from "./ui/card"

const ReelCard = () => {
    return (
        <Card className="py-1 bg-black min-h-20">
            <CardHeader className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <ReelProfileIcon />
                    <CardTitle className="flex flex-col text-xs">
                        <div className="flex items-center">
                            <span>username</span>
                            <Dot size={16} />
                            <span className="text-blue-800">Follow</span>
                        </div>
                        <p className="leading-none text-[8px]">
                            suggested post
                        </p>
                    </CardTitle>
                </div>

                <CardAction className="my-auto">
                    <MoreHorizontal size={16} color="gray" />
                </CardAction>
            </CardHeader>
            <CardContent className="min-h-36 max-h-96">
                <img src="https://images.unsplash.com/photo-1527275307199-15dbf3ce91c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMHBvc3QlMjBmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
            </CardContent>
            <CardFooter className="flex flex-col items-start min-h-10">
                <div className="w-full py-3 px-5 flex justify-between items-center leading-none">
                    <div className="flex gap-2.5 items-center ">
                        <Heart size={19} color="white" />
                        <MessageCircle size={16} color="white" />
                        <Send size={16} color="white" />
                    </div>
                    <div>
                        <Bookmark size={18} color="white" />
                    </div>
                </div>
                <span className="px-5 text-[9px] leading-none">
                    1,900 likes
                </span>
                <p className="text-[9px] leading-none px-5 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt temporibus cum aspernatur debitis repudiandae ipsum consequatur! Eum, quis corporis!
                </p>
                <span className="px-5 text-[9px] leading-none py-1">
                    View all 45 comments
                </span>                
                <span className="px-5 text-[9px] leading-none">
                    10 December | See Translation
                </span>                

            </CardFooter>
        </Card>
    )
}

export default ReelCard