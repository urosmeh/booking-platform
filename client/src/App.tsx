import { Flex } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <Flex
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Navbar />
      <Home />
    </Flex>
  );
}

export default App;
