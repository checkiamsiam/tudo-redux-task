import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "dashboard_sidebar",
  initialState: {
    visible : false , 
  },
  reducers: {
    setVisible: (state , action) => {
      state.visible = action.payload;
    },
  },
});

const sidebarReducer = sidebarSlice.reducer

export const { setVisible } = sidebarSlice.actions;

export default sidebarReducer;
