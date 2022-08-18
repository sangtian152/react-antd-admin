import { createSlice } from "@reduxjs/toolkit"
export const slice = createSlice({
    name: "tagsView",
    initialState: {
        taglist: [],
    },
    reducers: {
        addTag: (state, {payload}) => {
            const { title, path, affix } = payload
            const hasTag = state.taglist.find((item) => item.path === path)
            if (!hasTag && path !== '/') {
                state.taglist = state.taglist.concat({ title, path, affix })
            }
        },
        emptyTaglist: (state) => {
            state.taglist = [
                ...state.taglist.filter((item) => item.path === "/home"),
              ]
        },
        deleteTag: (state, {payload}) => {
            const { path } = payload
            state.taglist = [...state.taglist.filter((item) => item.path !== path)]
        },
        closeOtherTags: (state, {payload}) => {
            const { path } = payload
            state.taglist = [
                ...state.taglist.filter((item) => item.path === "/home" || item.path === path),
            ]
        }
    },
})

export const { addTag, emptyTaglist, deleteTag, closeOtherTags } = slice.actions
export default slice.reducer