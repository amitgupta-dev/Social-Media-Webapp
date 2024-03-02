import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const createPost = createAsyncThunk('createPost', async () => {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/post`, { withCredentials: true })
    console.log(response)
    return response.data.createdPost
})

const initialState = {
    data: null,
    loading: false,
    error: null,
}

export const UserSlice = createSlice({
    name: 'createdPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the pending state
        builder.addCase(createPost.pending, (state) => {
            state.loading = true
        })

        // Handle the fulfilled state
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        // Handle the rejected state
        builder.addCase(createPost.rejected, (state) => {
            state.loading = false
            state.error = 'An error occurred'
        })
    }
})

export default UserSlice.reducer