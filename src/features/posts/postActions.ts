import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSinglePost = createAsyncThunk(
  "posts/single",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/posts/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts",
      );
    }
  },
);

export const getFeeds = createAsyncThunk(
  "posts/feeds",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/posts/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts",
      );
    }
  },
);
// export const getSinglePost = createAsyncThunk("post/single", async () => {});
// export const getSinglePost = createAsyncThunk("post/single", async () => {});
