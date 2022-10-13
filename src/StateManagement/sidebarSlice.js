import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "dashboard_sidebar",
  initialState: {
    visible: false,
    animation: {
      initial: {},
      animate: {},
      exit: {},
      transition: {},
    },
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
    setInitialAnimation: (state, action) => {
      state.animation.initial = action.payload;
    },
    setAnimateAnimation: (state, action) => {
      state.animation.animate = action.payload;
    },
    setExitAnimation: (state, action) => {
      state.animation.exit = action.payload;
    },
    setTransitionAnimation: (state, action) => {
      state.animation.transition = action.payload;
    },
  },
});

const sidebarReducer = sidebarSlice.reducer;

export const { setVisible, setInitialAnimation, setAnimateAnimation, setExitAnimation, setTransitionAnimation } = sidebarSlice.actions;

export default sidebarReducer;
