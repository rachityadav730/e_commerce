import { configureStore } from '@reduxjs/toolkit'
import gaytriReducer from './gaytriSlice'
export const store = configureStore({
  reducer: {
    gaytri: gaytriReducer
  },
})

