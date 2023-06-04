import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, Endpoints } from "../constants";
import { Category } from "../../models/Category";

export type GetCategoryRequest = {
  id: number;
};

const categoriesApi = createApi({
  reducerPath: Endpoints.CATEGORIES,
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/${Endpoints.CATEGORIES}`,
  }),
  tagTypes: ["Category"],
  endpoints(builder) {
    return {
      getCategories: builder.query<Category[], void>({
        query: () => "",
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({
                  type: "Category" as const,
                  id,
                })),
                "Category",
              ]
            : ["Category"],
      }),
    };
  },
});

export const { useGetCategoriesQuery } = categoriesApi;
export { categoriesApi };
