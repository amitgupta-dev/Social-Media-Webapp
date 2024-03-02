import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    avatar: undefined,
    cover: undefined,
    name: undefined,
    email: undefined,
    phone: undefined,
    dob: undefined,
    nickname: undefined,
    gender: undefined,
    familyType: undefined,
    relationship: undefined,
    about: undefined,
    quote: undefined,
    work: [],
    education: [],
    placesLived: [],
}

export const EditProfileSlice = createSlice({
    name: 'EditProfile',
    initialState,
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload
        },
        setCover: (state, action) => {
            console.log("slice:", action.payload)
            state.cover = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setDob: (state, action) => {
            state.dob = action.payload
        },
        setNickname: (state, action) => {
            state.nickname = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setFamilyType: (state, action) => {
            state.familyType = action.payload
        },
        setRelationship: (state, action) => {
            state.relationship = action.payload
        },
        setAbout: (state, action) => {
            state.about = action.payload
        },
        setQuote: (state, action) => {
            state.quote = action.payload
        },
        addWork: (state, action) => {
            state.work = [...state.work, action.payload]
        },
        addEducation: (state, action) => {
            state.education = [...state.education, action.payload]
        },
        addPlacesLived: (state, action) => {
            state.placesLived = [...state.placesLived, action.payload]
        },
        setWorkField: (state, action) => {
            const { index, field, value } = action.payload
            state.work[index] = { ...state.work[index], [field]: value }
        },
        setEducationField: (state, action) => {
            const { index, field, value } = action.payload
            state.education[index] = { ...state.education[index], [field]: value }
        },
        setPlacesLivedField: (state, action) => {
            const { index, field, value } = action.payload
            state.placesLived[index] = { ...state.placesLived[index], [field]: value }
        },
        setWork: (state, action) => {
            state.work = action.payload
        },
        setEducation: (state, action) => {
            state.education = action.payload
        },
        setPlacesLived: (state, action) => {
            state.placesLived = action.payload
        }
    },
})

export const { setAvatar, setCover, setEmail, setName, setPhone, setDob, setNickname, setGender, setFamilyType, setRelationship, setAbout, setQuote, addWork, addEducation, addPlacesLived, setWorkField, setEducationField, setPlacesLivedField, setWork, setEducation, setPlacesLived } = EditProfileSlice.actions
export default EditProfileSlice.reducer