import { configureStore } from '@reduxjs/toolkit'
import SigninSlice from './slices/SigninSlice'
import SignupSlice from './slices/SignupSlice'
import EditProfileSlice from './slices/EditProfileSlice'
import UserSlice from './slices/userSlice'
import { postsApi } from './requests/post'

export const store = configureStore({
    reducer: {
        signup: SignupSlice,
        signin: SigninSlice,
        user: UserSlice,
        editProfile: EditProfileSlice,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
    devTools: true,
})