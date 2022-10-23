import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const getProfile = createAsyncThunk(
  "getProfile",
  async ({ userId, setLoading }) => {
    console.log("userpro", userId);
    try {
      const response = await api.getProfile(userId);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const registerProfile = createAsyncThunk(
  "registerProfile",
  async ({profileData,navigate}) => {
    console.log("data",profileData);
    try {
      const response = await api.registerProfile(profileData);
      navigate("/");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    error: "",
    loading: false,
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
  [registerProfile.pending]: (state, action) => {
    state.loading = true;
  },
  [registerProfile.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  [registerProfile.fulfilled]: (state, action) => {
    state.loading = false;
    state.error = action.payload.message;
  },
});

export const profile = profileSlice.actions;
export default profileSlice;
