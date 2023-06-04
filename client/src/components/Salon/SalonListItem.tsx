import { Box, Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Salon } from "../../models/Salon";

type SalonListItemProps = {
  salon: Salon;
};

export const SalonListItem = ({ salon }: SalonListItemProps) => {
  return (
    <Box>
      <Card>
        <CardBody>
          <Image src="https://placehold.co/150x150/png" />
          <Stack alignItems={"center"}>
            <Heading>{salon.name}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
