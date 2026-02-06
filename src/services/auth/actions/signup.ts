import axios from "axios";
// src/store/auth/signup/signup.action.ts

import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ApiError {
  message: string;
  status: number;
}

export const signupUser = createAsyncThunk<
  SignupResponse, // Return Type
  SignupPayload, // Payload Type
  { rejectValue: ApiError }
>("signup/signupUser", async (payload, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up", payload);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message ?? "API Error",
        status: error.response?.status ?? 500,
      });
    }

    return rejectWithValue({
      message: "Unexpected error",
      status: 500,
    });
  }
});
