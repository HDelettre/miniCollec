import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { data: null },
  reducers: {
    LOGIN_USER: (state, { payload }) => (state.data = payload)
  },
});

export const { LOGIN_USER } = userSlice.actions;

export default userSlice.reducer;
