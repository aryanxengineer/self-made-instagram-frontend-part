import { createSlice } from "@reduxjs/toolkit";
import { searchProfile } from "@/features/search/searchActions";

interface SearchState {
  searchContentLoading: boolean;
  searchData: any[] | null;
  searchError: string | null;
}

const initialState: SearchState = {
  searchContentLoading: false,
  searchData: null,
  searchError: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProfile.pending, (state) => {
        state.searchContentLoading = true;
      })
      .addCase(searchProfile.fulfilled, (state, action) => {
        ((state.searchContentLoading = false),
          (state.searchData = action.payload.data));
        state.searchError = null;
      })
      .addCase(searchProfile.rejected, (state, action) => {
        state.searchContentLoading = false;
        state.searchError = action.payload as string;
      });
  },
});

export default searchSlice.reducer;
