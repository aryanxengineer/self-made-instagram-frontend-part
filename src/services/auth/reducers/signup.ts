// src/store/auth/signup/signup.slice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { signupUser, type SignupResponse } from "../actions/signup";

/**
 * ======================
 * STATE TYPE
 * ======================
 */

interface SignupState {
  user: SignupResponse["user"] | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

/**
 * ======================
 * INITIAL STATE
 * ======================
 */

const initialState: SignupState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};

/**
 * ======================
 * SLICE
 * ======================
 */

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignupState: () => initialState,

    clearSignupError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })

      // Success
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<SignupResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.success = true;
        }
      )

      // Failed
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Signup failed";
        state.success = false;
      });
  },
});

export const { resetSignupState, clearSignupError } =
  signupSlice.actions;

export default signupSlice.reducer;