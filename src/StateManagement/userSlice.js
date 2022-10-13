import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data : {}
  },
  reducers: {
    setUser: (state , action) => {
      state.data = action.payload;
    },
    removeUser: (state) => {
      state.data = {};
    },
  },
});

const userReducer = userSlice.reducer

export const { setUser, removeUser } = userSlice.actions;

export default userReducer;
