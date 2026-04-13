import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/authSlice";
import postReducer from "@/features/posts/postSlice";
import profileReducer from "@/features/profiles/profileSlice";
import likeReducer from "@/features/likes/likeSlice";

export const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    profile: profileReducer,
    like: likeReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
