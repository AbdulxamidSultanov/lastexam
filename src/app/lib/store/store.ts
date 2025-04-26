"use client";

import { configureStore } from "@reduxjs/toolkit";
import jobApi from "./api/apiSlice";
import jobReducer from "./reducer/jobSlice";

const store = configureStore({
  reducer: {
    job: jobReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
