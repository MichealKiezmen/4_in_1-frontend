import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    loading: false,
    userData: null,
    auth : false,
    token: null
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.token = action.payload,
            state.auth = true
        },
        updateUser: (state, action) => {
            state.userData = action.payload
            state.auth = true
        },
        logUserOut: (state) => {
            state.auth = false
            state.userData = null,
            state.token = null
        }
    }
})

export const getUserData = state => state.persistedReducer.userData
export const getTokens = state => state.persistedReducer.token


export const {updateToken, updateUser, logUserOut} = userSlice.actions

export default userSlice.reducer
