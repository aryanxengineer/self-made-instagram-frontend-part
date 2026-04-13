import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const likes = createAsyncThunk(
  "likes/post",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/likes/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Rejected like a post",
      );
    }
  },
);

export const like = createAsyncThunk(
  "like/post",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/likes/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Rejected like a post",
      );
    }
  },
);

export const disLike = createAsyncThunk(
  "disLike/post",
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/likes/${postId}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Rejected dislike a post",
      );
    }
  },
);
