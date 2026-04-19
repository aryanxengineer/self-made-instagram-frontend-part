import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Heart,
  Clock,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { comment, postComments } from "@/features/comments/commentActions";
import { toast } from "sonner";
import { disLike, like } from "@/features/likes/likeActions";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Spinner } from "./ui/spinner";
import { useNavigate } from "react-router-dom";
export default function SinglePost({ post }: { post: any }) {
  const {
    _id,
    profileId,
    image,
    authorUsernameSnapshot,
    authorAvatar,
    caption,
    likesCount,
    title,
    createdAt,
    isLiked,
    commentsCount,
  } = post;

  const navigate = useNavigate();

  const avatarFallback =
    authorUsernameSnapshot?.charAt(0)?.toUpperCase() || "U";

  const dispatch = useAppDispatch();
  const { commentsLoading, comments } = useAppSelector(
    (state) => state.comment,
  );

  const [commentData, setCommentData] = useState("");
  const [countComments, setCountComments] = useState<number>(commentsCount);
  const [likes, setLikes] = useState<number>(likesCount);
  const [liked, setLiked] = useState<boolean>(isLiked);

  const commentHandler = () => {
    try {
      if (commentData.trim() !== "") {
        dispatch(comment({ postId: _id, content: commentData }));
        setCountComments((prev) => prev + 1);
        setCommentData("");
        toast.success("Comment successfully posted");
        return;
      }

      toast.info("Text is needed to comment on post");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const getCommentsHandler = () => {
    dispatch(postComments(_id));
  };

  const likeHandler = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      dispatch(disLike(_id));
    } else {
      setLikes((prev) => prev + 1);
      dispatch(like(_id));
    }
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex justify-center w-full p-2 sm:p-6">
      <Card className="w-full max-w-2xl rounded-2xl border shadow-md">
        <CardContent className="p-0">
          {/* HEADER */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Avatar
                className="h-10 w-10 cursor-pointer"
                onClick={() => navigate(`/profile/${profileId}`)}
              >
                <AvatarImage src={authorAvatar || ""} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>

              <div>
                <button
                  onClick={() => navigate(`/profile/${profileId}`)}
                  className="text-sm font-semibold hover:underline"
                >
                  {authorUsernameSnapshot}
                </button>

                <p className="text-[11px] text-gray-500">
                  {new Date(createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            <MoreHorizontal className="h-5 w-5 cursor-pointer" />
          </div>

          {/* IMAGE */}
          <div className="w-full bg-black aspect-square overflow-hidden">
            <img
              src={image?.url}
              alt="post"
              className="w-full h-full object-contain"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={likeHandler}>
                <Heart
                  className={`h-6 w-6 ${
                    liked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>

              <Dialog>
                <DialogTrigger>
                  <Button onClick={getCommentsHandler} variant="ghost">
                    <MessageCircle className="h-6 w-6" />
                    {countComments > 0 && (
                      <span className="pl-2 text-xs">{countComments}</span>
                    )}
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-sm">
                  {commentsLoading ? (
                    <Spinner />
                  ) : Array.isArray(comments) && comments.length > 0 ? (
                    <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
                      {comments.map((comment: any, index: number) => (
                        <div
                          key={comment.profileId + index}
                          className="rounded-md border bg-white p-2"
                        >
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() =>
                                navigate(`/profile/${comment.profileId}`)
                              }
                              className="text-xs font-medium text-blue-600 hover:underline"
                            >
                              @{comment.username}
                            </button>

                            <span className="text-[10px] text-gray-400">
                              {new Date(comment.createdAt).toLocaleDateString(
                                "en-IN",
                              )}
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-gray-700">
                            {comment.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-xs text-gray-400">
                      No comments available.
                    </p>
                  )}
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="icon">
                <Send className="h-6 w-6" />
              </Button>
            </div>

            <Button variant="ghost" size="icon">
              <Bookmark className="h-6 w-6" />
            </Button>
          </div>

          {/* LIKES */}
          <div className="px-4">
            <p className="text-sm font-semibold">{Number(likes)} likes</p>
          </div>

          {/* TITLE */}
          <div className="px-4 text-sm font-medium">{title}</div>

          {/* CAPTION (NEWLINES FIXED) */}
          <div className="px-4 py-2 text-sm whitespace-pre-line">
            <span
              onClick={() => navigate(`/profile/${profileId}`)}
              className="font-semibold mr-2 cursor-pointer hover:underline"
            >
              {authorUsernameSnapshot}
            </span>
            {caption}
          </div>

          {/* COMMENT INPUT */}
          <div className="flex items-center border-t px-4 py-2">
            <input
              type="text"
              value={commentData}
              placeholder="Add a comment..."
              onChange={(e) => setCommentData(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
            />
            <Button onClick={commentHandler} className="px-5">
              Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
