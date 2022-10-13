import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./StateManagement/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidebarReducer from "./StateManagement/sidebarSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user : persistedUserReducer, 
    sidebar : sidebarReducer,
  },
});

const persistor = persistStore(store)

export {persistor} ;

export default store;
