import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
        credentials: 'include'
    }),
    endpoints: (build) => ({

        getPostById: build.query({ query: (id) => `post/${id}` }),

        getPosts: build.query({ query: (queryParams) => `post?${queryParams}` }),

        createPost: build.mutation({
            query: (body) => ({
                url: `post`,
                method: 'POST',
                body
            })
        }),

        updatePost: build.mutation({
            query: (body) => ({
                url: `post`,
                method: 'PATCH',
                body
            })
        }),

        deletePost: build.mutation({
            query: (body) => ({
                url: `post`,
                method: 'DELETE'
            })
        })
    }),
})

// Auto-generated hooks
export const {
    useGetPostByIdQuery,
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApi