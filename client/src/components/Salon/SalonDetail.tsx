import {
  Flex,
  Text,
  Image,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import { Salon } from "../../models/Salon";
import { WorkingHoursC } from "./WorkingHours";

type SalonDetailProps = {
  salon: Salon;
};
export const SalonDetail = ({ salon }: SalonDetailProps) => {
  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab>Info</Tab>
        <Tab>Book a visit</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex direction={"column"}>
            <Text>{salon.description}</Text>
            <Flex justifyContent={"space-between"}>
              <Image borderRadius={"md"} width={150} src={salon.img} />
              <Flex direction={"column"}>
                {salon.workingHours.length ? (
                  <WorkingHoursC workingHours={salon.workingHours[0]} />
                ) : (
                  "No working hours found."
                )}
              </Flex>
            </Flex>
            <Link href="https://www.google.com" isExternal>
              Salons webpage <ExternalLinkIcon />
            </Link>
          </Flex>
        </TabPanel>
        <TabPanel>
          Hi
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
