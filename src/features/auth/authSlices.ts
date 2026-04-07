import { createSlice } from "@reduxjs/toolkit";
import {
  signupUser,
  signinUser,
  authenticUser,
  signoutAllDevices,
  signoutSingleDevice,
} from "./authActions";
import type { AuthState } from "@/@types/auth.types";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  loginLoading: false,
  signupLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.isLoading = false;
      state.loginLoading = false;
      state.signupLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // =========================
      // SIGNUP
      // =========================
      .addCase(signupUser.pending, (state) => {
        state.signupLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state) => {
        state.signupLoading = false;
        state.error = "Signup failed";
      })

      // =========================
      // SIGNIN
      // =========================
      .addCase(signinUser.pending, (state) => {
        state.loginLoading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
        localStorage.setItem("id", action.payload.data.id);
      })
      .addCase(signinUser.rejected, (state) => {
        state.loginLoading = false;
        state.error = "Login failed";
      })

      // =========================
      // AUTHENTICATE USER (/me)
      // =========================
      .addCase(authenticUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
      })
      .addCase(authenticUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      // =========================
      // LOGOUT SINGLE DEVICE
      // =========================
      .addCase(signoutSingleDevice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signoutSingleDevice.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(signoutSingleDevice.rejected, (state) => {
        state.isLoading = false;
        state.error = "Logout failed";
      })

      // =========================
      // LOGOUT ALL DEVICES
      // =========================
      .addCase(signoutAllDevices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signoutAllDevices.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(signoutAllDevices.rejected, (state) => {
        state.isLoading = false;
        state.error = "Logout from all devices failed";
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
