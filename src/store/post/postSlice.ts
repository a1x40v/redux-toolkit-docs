import { createSlice } from '@reduxjs/toolkit';

import { Post } from '../../services/types';
import { RootState } from '../store';

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
});

export const postReducer = postSlice.reducer;

// export const { increment } = postSlice.actions;

// export const selectPost = (state: RootState) => state.pos;
