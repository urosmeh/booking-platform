import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, Endpoints } from "../endpointsEnum";
import { Booking } from "../../models/Booking";

export type PostBookingRequest = {
  salonId: number;
  userId: number;
  at: Date;
};

const bookingsApi = createApi({
  reducerPath: Endpoints.BOOKINGS,
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/${Endpoints.BOOKINGS}`,
  }),
  tagTypes: ["Booking"],
  endpoints(builder) {
    return {
      getBookings: builder.query<Booking[], void>({
        query: () => ({
          url: "/",
          params: { _expand: "salon" },
        }),

        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({
                  type: "Booking" as const,
                  id,
                })),
                "Booking",
              ]
            : ["Booking"],
      }),
      postBooking: builder.mutation<Booking, PostBookingRequest>({
        query: (booking) => {
          return {
            url: "",
            method: "POST",
            body: booking,
          };
        },
        invalidatesTags: ["Booking"],
      }),
      deleteBooking: builder.mutation<void, number>({
        query: (id) => {
          return {
            url: `/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["Booking"],
      }),
    };
  },
});

export const {
  useGetBookingsQuery,
  usePostBookingMutation,
  useDeleteBookingMutation,
} = bookingsApi;
export { bookingsApi };
