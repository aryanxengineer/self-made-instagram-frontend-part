import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { like, disLike } from "@/features/likes/likeActions";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

const Like = ({ postId }: { postId: string }) => {
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.like);

  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
    if (liked) {
      dispatch(disLike(postId));
    } else {
      dispatch(like(postId));
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => likeHandler()}
      className="hover:scale-110 transition"
    >
      <Heart
        className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`}
      />
    </Button>
  );
};

export default Like;
