import { Flex } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Navbar } from "./layouts/Navbar";
import { Route, Routes } from "react-router-dom";
import { Bookings } from "./pages/Bookings";

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
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Flex>
  );
}

export default App;
