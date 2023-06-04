import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, Endpoints } from "../../constants";
import { Salon } from "../../../models/Salon";

export type GetSalonRequest = {
  id: number;
};

const salonsApi = createApi({
  reducerPath: Endpoints.SALONS,
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/${Endpoints.SALONS}`,
  }),
  tagTypes: ["Salon"],
  endpoints(builder) {
    return {
      getSalons: builder.query<Salon[], void>({
        query: () => "",
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({
                  type: "Salon" as const,
                  id,
                })),
                "Salon",
              ]
            : ["Salon"],
      }),
      getSalonById: builder.query<Salon, GetSalonRequest>({
        query: (id) => ({
          url: `/${id}`,
          params: { _embed: "workingHours" },
        }),
      }),
    };
  },
});

export const { useGetSalonsQuery, useGetSalonByIdQuery } = salonsApi;
export { salonsApi };
