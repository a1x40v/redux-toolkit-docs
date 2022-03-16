import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from './types';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts', id } as const)),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
    updatePost: builder.mutation<Post, Partial<Post>  & Pick<Post, 'id'>>({
      query: ({id, ...patch}) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch
      }),
      transformResponse: (response: { data: Post }, meta, arg) => response.data,
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    })
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useUpdatePostMutation } = postApi;
