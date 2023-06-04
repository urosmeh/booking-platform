import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { salonsApi } from "./apis/salons/salonsApi";

const store = configureStore({
  reducer: {
    [salonsApi.reducerPath]: salonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(salonsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export { store };
export { salonsApi } from "./apis/salons/salonsApi";
export {
  useGetSalonsQuery,
  useGetSalonByIdQuery,
} from "./apis/salons/salonsApi";
