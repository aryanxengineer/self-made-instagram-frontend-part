import SinglePost from "@/components/ShowSinglePost";
import { Spinner } from "@/components/ui/spinner";
import { getSinglePost } from "@/features/posts/postActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Page = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { singlePostLoading, singlePost } = useAppSelector(
    (state) => state.post,
  );

  const { postId } = useParams();

  useEffect(() => {
    if (postId) {
      dispatch(getSinglePost(postId));
    }
  }, [postId, dispatch]);

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 no-scrollbar">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft size={16} />
        </button>
        <h1 className="text-lg font-semibold">Post</h1>
      </div>

      {/* Content */}
      {singlePostLoading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Spinner />
        </div>
      ) : singlePost ? (
        <div className="max-w-2xl">
          <SinglePost post={singlePost} />
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          Post not found or removed
        </div>
      )}
    </div>
  );
};

export default Page;