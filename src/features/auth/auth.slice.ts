import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = { token: "", userType : null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
