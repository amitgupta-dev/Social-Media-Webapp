import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
    email: "",
    password: "",
    remember_me: false
}

export const SigninSlice = createSlice({
    name: 'Signin',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setSigninPassword: (state, action) => {
            state.password = action.payload
        },
        setRememberMe: (state, action) => {
            state.remember_me = action.payload
        }
    },
})

export const { setEmail, setSigninPassword, setRememberMe } = SigninSlice.actions
export default SigninSlice.reducer