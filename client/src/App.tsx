import { Flex } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./layouts/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Flex
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<div>test</div>} />
      </Routes>
    </Flex>
  );
}

export default App;
