import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/productsApi";
import { RootState } from "../../../app/store";

export interface SingleProductType {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  img: string;
}
interface ProductsListTypes {
  [key: string]: SingleProductType;
}
export interface CounterState {
  products: {} | ProductsListTypes;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: CounterState = {
  products: {},
  status: "idle",
};

export const getAllProducts = createAsyncThunk("products/getall", async () => {
  const response = await fetchProducts();

  return response.data;
});

export const counterSlice = createSlice({
  name: "products",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        delete action.payload[0].id;
        state.products = action.payload[0];
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const productApiStatus = (state: RootState) => state.products.status;
export const allProducts = (state: RootState) =>
  state.products.products as ProductsListTypes;

export default counterSlice.reducer;
