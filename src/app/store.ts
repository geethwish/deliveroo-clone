import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ProductsReducer from "../features/products/slices/products.slice";
import loginReducer from "./slices/login.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductsReducer,
    user: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
