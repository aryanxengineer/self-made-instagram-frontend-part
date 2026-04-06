import type { SigninInputType, SignupInputType } from "@/@types/auth.types";
import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserResponseType } from "@/@types/auth.types";

/*===================
    signup Action
===================*/
export const signupUser = createAsyncThunk<UserResponseType, SignupInputType>(
  "auth/signup",
  async (signupInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signup", signupInput, {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Registration failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const signinUser = createAsyncThunk<UserResponseType, SigninInputType>(
  "auth/signin",
  async (signinInput, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/signin", signinInput, {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed - Try again later",
      );
    }
  },
);

/*===================
    signin Action
===================*/
export const authenticUser = createAsyncThunk<UserResponseType, SignupInputType>(
  "auth/authenticUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/auth/", {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "User fetching failed - Login again",
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
      const { data } = await axiosInstance.post("/auth/signout-single-device", {
        withCredentials: true,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Sign out failed - Try again later",
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
        error.response?.data?.message ||
          "Sign out from all devices failed - Try again later",
      );
    }
  },
);
