import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./slices/basketSlice"
import wishlistReducer from "./slices/wishlistSlice"


export const store = configureStore({
  reducer: {
    basket:basketReducer,
    wishlist:wishlistReducer
  },
})