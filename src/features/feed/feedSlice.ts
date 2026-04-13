import { createSlice } from "@reduxjs/toolkit";
import { trendingPosts } from "./feedActions.js";
import type { PostType } from "@/@types/post.js";

export interface TrendingFeedState {
  isLoading: boolean;
  success: boolean;
  message: string;
  trendingPostsData: [PostType] | null;
}

const initialState: TrendingFeedState = {
  isLoading: false,
  success: false,
  message: "",
  trendingPostsData: null,
};

const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(trendingPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(trendingPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.success = action.payload.success;
        state.trendingPostsData = action.payload.data;
      })
      .addCase(trendingPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
        state.success = false;
        state.trendingPostsData = null;
      });
  },
});

export default feedSlice.reducer;
