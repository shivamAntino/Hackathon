import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  adminInfoGetterService,
  adminInfoRemovalService,
  adminInfoSetterService,
} from "../../services";
import AuthService from "./auth.service";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginCreds } from "./types";

const initialState: AuthState = {
  token: adminInfoGetterService().token,
  userType: adminInfoGetterService().role,
  loading: "idle",
  error: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginCreds, thunkAPI) => {
    const { data, error } = await AuthService.login(payload);
    if (data) {
      adminInfoSetterService(data);
      return data;
    }
    return thunkAPI.rejectWithValue(error);
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  adminInfoRemovalService();
  return true;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { token, role } = action.payload;
      state.loading = "succeeded";
      state.token = token;
      state.userType = role;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.token = "";
      state.userType = null;
    });
  },
});

export default authSlice.reducer;
