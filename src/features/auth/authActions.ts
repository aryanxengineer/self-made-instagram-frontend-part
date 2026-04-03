import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*===================
    signup Action
===================*/
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (signupInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", signupInput, {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.data.message || "Registration failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const signinUser = createAsyncThunk(
  "auth/signin",
  async (signinInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signin", signinInput, {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.data.message || "Login failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const signoutSingleDevice = createAsyncThunk(
  "auth/signoutSingleDevice",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "/auth/signout-single-device",
        {
          withCredentials: true,
        },
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.data.message || "Sign out failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const signoutAllDevices = createAsyncThunk(
  "auth/signoutAllDevice",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signout-all-devices", {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.data.message ||
          "Sign out from all devices failed - Try again later",
      );
    }
  },
);
