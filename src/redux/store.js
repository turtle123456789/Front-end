import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSlide'
import userReducer from '../redux/slides/userSlide'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})