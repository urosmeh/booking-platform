import {
  CardBody,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Salon } from "../../models/Salon";
import { SalonDetail } from "./SalonDetail";
import { ClickableCard } from "../../ui/ClickableCard";

type SalonListItemProps = {
  salon: Salon;
  visitOn?: string;
  unclickable?: boolean;
};

export const SalonListItem = ({
  salon,
  visitOn,
  unclickable,
}: SalonListItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnOpen = () => {
    if (unclickable === true) {
      return;
    }
    onOpen();
  };

  return (
    <>
      <ClickableCard onClick={handleOnOpen}>
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
          {visitOn && <Text>your appointment: {visitOn}</Text>}
        </CardBody>
      </ClickableCard>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{salon.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SalonDetail salon={salon} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
