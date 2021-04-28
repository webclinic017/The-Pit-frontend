import { configureStore } from '@reduxjs/toolkit'

// slices
import { userSlice } from '../redux/slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
