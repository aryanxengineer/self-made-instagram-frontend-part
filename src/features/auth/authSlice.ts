import { createSlice } from "@reduxjs/toolkit";
import { signupUser, signinUser, authenticUser, signout } from "./authActions";
import type { AuthState } from "@/@types/auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  message: "",
  success: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthState: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = "Nothing is in auth state";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // =========================
      // SIGNUP
      // =========================
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.message = action.payload?.message;
      })
      .addCase(signupUser.rejected, (state) => {
        state.isLoading = false;
      })

      // =========================
      // SIGNIN
      // =========================
      .addCase(signinUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        
        const { _id, email} = action.payload.data;
        state.user = {
          _id,
          email
        }
        state.isAuthenticated = true;
      })
      .addCase(signinUser.rejected, (state) => {
        state.isLoading = false;
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
      .addCase(signout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(signout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
