import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/helpers/axiosInstance";

export const searchProfile = createAsyncThunk(
  "search/profile",
  async (query: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/search/profiles", {
        params: { query },
      });
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || "Something went wrong",
      );
    }
  },
);
