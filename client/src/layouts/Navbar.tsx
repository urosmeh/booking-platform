import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const handleDrawerToggle = () => setDrawerOpen(!isDrawerOpen);
  return (
    <Box bg="teal.500" px={4} color="white" alignSelf={"stretch"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight="bold">
          Booking platform
        </Text>
        {isSmallScreen ? (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="whiteAlpha"
            onClick={handleDrawerToggle}
          />
        ) : (
          <Flex alignItems={"center"}>
            <Link ml={10}>Home</Link>
            <Link ml={10}>My bookings</Link>
          </Flex>
        )}

        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <VStack padding="6" spacing="24px">
                ASdadsasdasdasd
                <Link onClick={handleDrawerToggle}>Home</Link>
                <Link onClick={handleDrawerToggle}>My bookings</Link>
              </VStack>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};
