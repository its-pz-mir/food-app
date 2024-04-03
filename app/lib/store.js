import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './slice/tokenSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            token : tokenSlice
        },
    })
}