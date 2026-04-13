import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/helpers/axiosInstance";

export const trendingPosts = createAsyncThunk(
  "feed/trending",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/feeds/trending`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Something went wrong",
      );
    }
  },
);

export const following = createAsyncThunk(
  "feed/following",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/feeds/following`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Something went wrong",
      );
    }
  },
);
