import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refreshed : false,
}

export const sharedSlice = createSlice({
    name: "shared",
    initialState,
    reducers: {
        refreshPage : (state) => {
            state.refreshed = !state.refreshed
        }
    }
})

export const pageRefreshed = state => state.shared.refreshed

export const {refreshPage} = sharedSlice.actions

export default sharedSlice.reducer
