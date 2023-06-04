import { useState } from "react";

// import "./App.css";
import { useGetSalonsQuery } from "./store";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { data } = useGetSalonsQuery();

  return (
    <>
      <Box bg="brand.100">
        <Flex direction={["column", "row"]}>
          <Box>
            {data?.map((salon) => (
              <Box>{salon.name}</Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
