import { configureStore } from '@reduxjs/toolkit'
import plantReducer from './plantReducer'

export default configureStore({
  reducer: {
    plant: plantReducer,
  },
})
