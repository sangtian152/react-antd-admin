import { createSlice } from "@reduxjs/toolkit"
import defaultSettings from "@/defaultSettings";
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings;
export const slice = createSlice({
    name: "app",
    initialState: {
        showSettings,
        sidebarLogo,
        fixedHeader,
        tagsView,
        sidebarCollapsed: false,
        settingPanelVisible: false,
    },
    reducers: {
        toggleSiderBar: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed
        },
        toggleSettingPanel: (state) => {
            state.settingPanelVisible = !state.settingPanelVisible
        },
        changeSetting: (state, action) => {
            const {key ,value } = action.payload;
            state[key] = value;
        },
        setSidebarLogo: (state, action) => {
            state.sidebarLogo = action.payload
        },
    },
})

export const { setSidebarLogo, toggleSiderBar, toggleSettingPanel, changeSetting } = slice.actions
export default slice.reducer