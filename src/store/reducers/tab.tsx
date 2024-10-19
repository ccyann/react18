import { createSlice } from '@reduxjs/toolkit'

interface TabState {
    isCollapse: boolean;
}
const initialState: TabState = {
    isCollapse: false,
}
const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        collapseMenu: (state: TabState) => {
            state.isCollapse = !state.isCollapse;
        },
    },
})

export const { collapseMenu } = tabSlice.actions
export default tabSlice.reducer