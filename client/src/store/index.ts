import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { salonsApi } from "./apis/salonsApi";
import { categoriesApi } from "./apis/categoriesApi";

const store = configureStore({
  reducer: {
    [salonsApi.reducerPath]: salonsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      salonsApi.middleware,
      categoriesApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export { store };
export { salonsApi };
export { categoriesApi };
export { useGetSalonsQuery, useGetSalonByIdQuery } from "./apis/salonsApi";
export { useGetCategoriesQuery } from "./apis/categoriesApi";
