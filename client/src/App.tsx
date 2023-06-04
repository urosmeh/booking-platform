import { useGetSalonsQuery } from "./store";
import { Flex, Text } from "@chakra-ui/react";
import { SalonList } from "./components/Salon/SalonList";

function App() {
  const { data } = useGetSalonsQuery();

  return (
    <>
      <Flex direction={"row"} justifyContent={"center"}>
        <SalonList salons={data} />
      </Flex>
    </>
  );
}

export default App;
