import { Box, Flex, Text, HStack, Wrap, WrapItem } from "@chakra-ui/react";
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
      <Text fontSize="xl">List of salons</Text>
      <Wrap spacing={4}>
        {salons.map((salon) => (
          <WrapItem key={salon.id} w="20%" justifyContent={"center"}>
            <SalonListItem salon={salon} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
