import { createSlice, type ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  signupUser,
  signinUser,
  signoutSingleDevice,
  signoutAllDevices,
} from "./authActions";

type UserResponseType = {
  id: string;
  name: string;
  email: string;
};

interface InitialStateType {
  loading: boolean;
  success: boolean;
  message: string;
  user: UserResponseType | null;
}

const initialState: InitialStateType = {
  loading: false,
  success: false,
  message: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialStateType>) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.message = "signing up...";
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.message = (action.payload as undefined) || "Signup failed";
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.message = "Signup failed";
      });
  },
});
