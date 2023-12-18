import { configureStore } from '@reduxjs/toolkit'
import SigninSlice from './slices/SigninSlice'
import SignupSlice from './slices/SignupSlice'
import EditProfileSlice from './slices/EditProfileSlice'
import UserSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        signup: SignupSlice,
        signin: SigninSlice,
        user: UserSlice,
        editProfile: EditProfileSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})