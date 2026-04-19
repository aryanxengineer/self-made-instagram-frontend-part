import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/authSlice";
import postReducer from "@/features/posts/postSlice";
import profileReducer from "@/features/profiles/profileSlice";
import likeReducer from "@/features/likes/likeSlice";
import feedReducer from "@/features/feed/feedSlice";
import commentReducer from "@/features/comments/commentSlice";
import followReducer from "@/features/follow/followSlice";
import searchReducer from "@/features/search/searchSlice";

export const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
    like: likeReducer,
    feed: feedReducer,
    comment: commentReducer,
    follow: followReducer,
    search: searchReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
