import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
    name: "",
    email: "",
    password: "",
    dob: undefined,
    gender: "",
    acceptTAndC: false,
}

export const SignupSlice = createSlice({
    name: 'Signup',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setDob: (state, action) => {
            state.dob = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setAcceptTAndC: (state, action) => {
            state.acceptTAndC = action.payload
        },
    },
})

export const { setName, setEmail, setPassword, setDob, setGender, setAcceptTAndC } = SignupSlice.actions
export default SignupSlice.reducer