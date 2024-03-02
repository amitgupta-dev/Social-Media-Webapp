import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
        credentials: 'include'
    }),
    endpoints: (build) => ({

        getUserById: build.query({ query: (id) => `user/${id}` }),

        getUsers: build.query({ query: (queryParams) => `user/search?${queryParams}` }),

        createUser: build.mutation({
            query: (body) => ({
                url: `user`,
                method: 'User',
                body
            })
        }),

        updateUser: build.mutation({
            query: (body) => ({
                url: `user`,
                method: 'PATCH',
                body
            })
        }),

        deleteUser: build.mutation({
            query: (body) => ({
                url: `user`,
                method: 'DELETE'
            })
        })
    }),
})

// Auto-generated hooks
export const {
    useGetUserByIdQuery,
    useGetUsersQuery,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi