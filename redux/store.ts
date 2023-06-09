import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { categoryApi } from "./services/categoryApi";
import { userApi } from "./services/userApi";
import { bannerApi } from "./services/bannerApi";
import { incomingApi } from "./services/incomingApi";
import { bestSellingApi } from "./services/bestSellingApi";
import { itemApi } from "./services/itemApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [incomingApi.reducerPath]: incomingApi.reducer,
    [bestSellingApi.reducerPath]: bestSellingApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      categoryApi.middleware,
      userApi.middleware,
      bannerApi.middleware,
      incomingApi.middleware,
      bestSellingApi.middleware,
      itemApi.middleware,
    ]),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
