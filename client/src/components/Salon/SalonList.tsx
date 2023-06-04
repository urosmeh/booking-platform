import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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
      <Grid templateColumns="repeat(4, 1fr)" gap={10}>
        {salons.map((salon) => (
          <GridItem key={salon.id}>
            <SalonListItem salon={salon} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
