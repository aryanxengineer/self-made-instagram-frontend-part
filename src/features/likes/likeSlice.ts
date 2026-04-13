import { createSlice } from "@reduxjs/toolkit";
import { like, disLike, likes } from "./likeActions";
import type { LikeType } from "@/@types/like.type";

interface LikeState {
  isLoading: boolean;
  message: string;
  likesData: [LikeType] | null;
}

const initialState: LikeState = {
  isLoading: false,
  message: "",
  likesData: null,
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likes.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(likes.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
        state.likesData = action.payload.data;
      })
      .addCase(likes.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(like.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(like.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
      })
      .addCase(like.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(disLike.pending, (state: LikeState) => {
        state.isLoading = true;
      })
      .addCase(disLike.fulfilled, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
      })
      .addCase(disLike.rejected, (state: LikeState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default likeSlice.reducer;
