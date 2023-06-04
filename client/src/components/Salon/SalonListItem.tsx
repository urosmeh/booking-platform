import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Salon } from "../../models/Salon";

type SalonListItemProps = {
  salon: Salon;
};

export const SalonListItem = ({ salon }: SalonListItemProps) => {
  return (
    <Card>
      <CardBody textAlign={"center"}>
        <Image src={salon.img} borderRadius={"md"} m={"0 auto"} />
        <Text
          fontSize={"lg"}
          fontWeight={"semibold"}
          overflowWrap={"break-word"}
        >
          {salon.name}
        </Text>
        <Text>{salon.city}</Text>
      </CardBody>
    </Card>
  );
};
