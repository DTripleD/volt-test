import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedTodoReducer } from "./slice";

export const store = configureStore({
  reducer: {
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
