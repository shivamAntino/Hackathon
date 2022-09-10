import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import DashboardService from "./dashboard.service";
import { DashboardState } from "./types";
import { getTop3Employees } from "./utils";

const initialState: DashboardState = {
  employees: [],
  top3Employees: [],
  pmData: null,
  loading: "idle",
  error: "",
};

export const getPMDashboardData = createAsyncThunk(
  "dashboard/getPMDashboardData",
  async (_, thunkAPI) => {
    const {
      auth: { id },
    } = thunkAPI.getState() as RootState;
    const { data, error } = await DashboardService.getPMDashboardData({ id });
    if (data) {
      return {...data, top3Employees : getTop3Employees(data.empData)};
    }
    return thunkAPI.rejectWithValue(error);
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPMDashboardData.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getPMDashboardData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    builder.addCase(getPMDashboardData.fulfilled, (state, action) => {
      const { empData, pmData, top3Employees } = action.payload;
      state.loading = "succeeded";
      state.employees = empData;
      state.pmData = pmData;
      state.top3Employees = top3Employees;
    });
  },
});

export default dashboardSlice.reducer;
