import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import AuthReducer from "./features/auth/auth.slice"

const store = configureStore({
  reducer: {
    auth : AuthReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store