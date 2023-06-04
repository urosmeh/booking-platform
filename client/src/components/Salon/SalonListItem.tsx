import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Salon } from "../../models/Salon";

type SalonListItemProps = {
  salon: Salon;
};

export const SalonListItem = ({ salon }: SalonListItemProps) => {
  return (
    <Card>
      <CardBody textAlign={"center"}>
        <Image
          src="https://placehold.co/150x150/png"
          borderRadius={"md"}
          m={"0 auto"}
        />
        <Stack alignItems={"center"}>
          <Text fontSize={"lg"} overflowWrap={"break-word"}>
            {salon.name}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
