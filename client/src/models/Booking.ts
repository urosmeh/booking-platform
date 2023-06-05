import { Salon } from "./Salon";

export type Booking = {
  id: number;
  salonId: number;
  userId: number;
  at: Date;
  salon: Salon;
};
