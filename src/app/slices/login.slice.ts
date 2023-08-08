import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthorizationType {
  status: "authorized" | "unauthorized";
}

export interface CounterState extends AuthorizationType {
  email: string | null;
}

const initialState: CounterState = {
  email: null,
  status: "unauthorized",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.status = "authorized";
    },
    clearUser: (state) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {},
});

export const { setUser, clearUser } = loginSlice.actions;
export const loginStatus = (state: RootState) => state.user.status;
export const userData = (state: RootState) => state.user.email;

export default loginSlice.reducer;
