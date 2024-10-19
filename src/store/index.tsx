import { configureStore } from '@reduxjs/toolkit'
import TabReducer from './reducers/tab'

const store = configureStore({
    reducer: {
        tab: TabReducer
    }
})
// 从 store 中推断根状态类型
export type RootState = ReturnType<typeof store.getState>;
// 从 store 中推断 dispatch 类型
export type AppDispatch = typeof store.dispatch;
export default store;