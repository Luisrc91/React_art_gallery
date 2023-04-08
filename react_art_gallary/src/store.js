import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './feautures/dataSlice'
import { logger } from './feautures/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})