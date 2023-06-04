import { useGetSalonsQuery } from "./store";
import { Flex, Input } from "@chakra-ui/react";
import { SalonList } from "./components/Salon/SalonList";
import { useEffect, useState } from "react";

function App() {
  const { data: salons } = useGetSalonsQuery();
  const [search, setSearch] = useState<string>("");
  const [filteredSalons, setFilteredSalons] = useState(salons);

  useEffect(() => {
    if (search) {
      setFilteredSalons(
        salons?.filter((s) =>
          s.name.toLowerCase().includes(search.toLowerCase())
        ) || []
      );
    } else {
      setFilteredSalons(salons);
    }
  }, [search, setFilteredSalons, salons]);

  return (
    <Flex
      justifyContent={"center"}
      p={10}
      direction={"column"}
      alignItems={"center"}
      gap={10}
    >
      <Input
        placeholder="Salon name"
        size="md"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        width={["75%", "33%"]}
      />
      <SalonList salons={filteredSalons} />
    </Flex>
  );
}

export default App;
