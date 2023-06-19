import { Spinner, SimpleGrid } from "@chakra-ui/react";
import { useGetBookingsQuery } from "../store";
import { SalonListItem } from "../components/Salon/SalonListItem";
import { Booking } from "../models/Booking";
export const Bookings = () => {
  const { data, isLoading } = useGetBookingsQuery();

  return (
    <SimpleGrid
      columns={[2, 3, 4]}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
    >
      {isLoading && <Spinner />}
      {data?.map((b: Booking) => (
        <SalonListItem
          salon={b.salon}
          unclickable
          visitOn={new Date(b.at).toUTCString()}
          key={b.id}
        />
      ))}
    </SimpleGrid>
  );
};
