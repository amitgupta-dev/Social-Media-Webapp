import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/user`, { withCredentials: true })
    console.log(response)
    return response.data.user;
})

const initialState = {
    data: null,
    loading: false,
    error: null,
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the pending state
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true;
        })

        // Handle the fulfilled state
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        // Handle the rejected state
        builder.addCase(fetchUserData.rejected, (state) => {
            state.loading = false;
            state.error = 'An error occurred';
        });
    }
})

export default UserSlice.reducer