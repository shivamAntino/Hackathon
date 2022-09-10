import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import AuthReducer from "./features/auth/auth.slice"
import DashboardReducer from "./features/dashboard/dashboard.slice"

const store = configureStore({
  reducer: {
    auth : AuthReducer,
    dashboard : DashboardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store