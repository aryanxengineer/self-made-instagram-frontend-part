import { createSlice } from "@reduxjs/toolkit";
import { myProfile, getProfileById } from "./profileActions";
import type { ProfileDataType } from "@/schemas/profile";

interface ProfileState {
  isLoading: boolean;
  message: string;
  profileData: ProfileDataType | null;
}

const initialState: ProfileState = {
  isLoading: false,
  message: "",
  profileData: null,
};

const commentSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myProfile.pending, (state: ProfileState) => {
        state.isLoading = true;
      })
      .addCase(myProfile.fulfilled, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
        state.profileData = action.payload.data;
      })
      .addCase(myProfile.rejected, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      })

      .addCase(getProfileById.pending, (state: ProfileState) => {
        state.isLoading = true;
      })
      .addCase(getProfileById.fulfilled, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload?.data?.message;
        state.profileData = action.payload.data;
      })
      .addCase(getProfileById.rejected, (state: ProfileState, action) => {
        state.isLoading = false;
        state.message = action.payload as unknown as string;
      });
  },
});

export default commentSlice.reducer;
