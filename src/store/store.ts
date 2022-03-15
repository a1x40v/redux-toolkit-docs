import { configureStore } from '@reduxjs/toolkit';

import { postApi } from '../services/postService';
import { postReducer } from './post/postSlice';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
