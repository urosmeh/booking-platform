import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Salon } from "../../models/Salon";
import { SalonListItem } from "./SalonListItem";

type SalonListProps = {
  salons: Salon[] | undefined;
};
export const SalonList = ({ salons }: SalonListProps) => {
  if (!salons || !salons.length) {
    return (
      <Box>
        <Text>No salons!</Text>
      </Box>
    );
  }

  return (
    <Flex gap="10" direction={"column"} alignItems={"center"}>
      <SimpleGrid columns={[2, 3, 4]} gap={10}>
        {salons.map((salon) => (
          <SalonListItem salon={salon} key={salon.id} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
