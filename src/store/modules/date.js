import { createSlice } from "@reduxjs/toolkit"
export const slice = createSlice({
    name: "date",
    initialState: {
        activeDate: new Date(),
    },
    reducers: {
        setActiveDate: (state, action) => {
            state.activeDate = action.payload
        },
    },
})

export const { setActiveDate } = slice.actions
export default slice.reducer