import Container from "@/components/Container";
import PostCard from "@/components/Post";
import { following } from "@/features/feed/feedActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(following());
  }, []);

  return (
    <Container>
      <PostCard />
    </Container>
  );
};

export default Home;
