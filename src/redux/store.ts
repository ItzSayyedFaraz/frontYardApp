import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './slice/contactSlice'

export const store=configureStore({
    reducer:{
        contacts:contactReducer,

    },
    devTools:true
})

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;