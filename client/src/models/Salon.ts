import { WorkingHours } from "./WorkingHours";

export type Salon = {
  id: number;
  name: string;
  city: string;
  address: string;
  owner: string;
  email: string;
  phone: string;
  categoryId: number;
  description: string;
  img: string;
  workingHours: WorkingHours[];
};
