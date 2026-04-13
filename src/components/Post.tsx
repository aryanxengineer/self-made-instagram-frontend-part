import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import Like from "@/components/Like";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { comment } from "@/features/comments/commentActions";
import { toast } from "sonner";

export default function PostCard() {
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.like);

  const [commentData, setCommentData] = useState("");

  const commentHandler = () => {
    const postId = "69d75d59c3388d849ae6a36c";
    const content = commentData;

    try {
      dispatch(comment({ postId, content }));
      setCommentData("");
      toast.success("Comment successfully posted");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong")
    }

  };

  return (
    <div className="flex justify-center w-full p-2 sm:p-4">
      <Card className="w-full max-w-xl rounded-2xl shadow-md border ">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">john_doe</p>
                <p className="text-xs text-gray-500">New York, USA</p>
              </div>
            </div>
            <MoreHorizontal className="h-5 w-5 cursor-pointer" />
          </div>

          {/* Image */}
          <div className="w-full aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              className="w-full h-full object-cover"
              alt="post"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Like postId={"69d75d59c3388d849ae6a36c"} />
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Send className="h-6 w-6" />
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>

          {/* Likes */}
          <div className="px-4">
            <p className="text-sm font-semibold">1,234 likes</p>
          </div>

          {/* Caption */}
          <div className="px-4 py-2 text-sm">
            <span className="font-semibold mr-2">john_doe</span>
            Exploring the world 🌍✨ This is a beautiful day to capture moments.
          </div>

          {/* Time */}
          <div className="px-4 py-2 text-xs text-gray-400">2 hours ago</div>

          {/* Add Comment */}
          <div className="flex items-center border-t px-4 py-2">
            <input
              type="text"
              value={commentData}
              placeholder="Add a comment..."
              onChange={(e) => setCommentData(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
            />
            <Button onClick={() => commentHandler()} className="px-5">
              Post
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
