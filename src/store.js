import { configureStore } from '@reduxjs/toolkit'
import userReducer from './StateManagement/userSlice'

const store = configureStore({
  reducer : {
    user : userReducer
  }
})


export default store