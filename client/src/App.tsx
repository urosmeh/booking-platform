import { useGetCategoriesQuery, useGetSalonsQuery } from "./store";
import { Flex, Input, Spinner } from "@chakra-ui/react";
import { SalonList } from "./components/Salon/SalonList";
import { useEffect, useState } from "react";
import { CategoryList } from "./components/Category/CategoryList";
import { Category } from "./models/Category";

function App() {
  const { data: salons, isLoading: isSalonsLoading } = useGetSalonsQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const [search, setSearch] = useState<string>("");
  const [filteredSalons, setFilteredSalons] = useState(salons);
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const onSelectCategory = (id: number) => {
    if (selectedCategory?.id === id) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(categories?.find((c) => c.id === id));
  };

  useEffect(() => {
    setFilteredSalons(
      salons?.filter((s) => {
        if (search.length > 0 && selectedCategory) {
          return (
            s.name.toLowerCase().includes(search.toLowerCase()) &&
            s.categoryId === selectedCategory.id
          );
        }

        if (search.length > 0 && !selectedCategory) {
          return s.name.toLowerCase().includes(search.toLowerCase());
        }

        if (selectedCategory && search.length === 0) {
          return s.categoryId === selectedCategory.id;
        }

        if (!selectedCategory && search.length === 0) {
          return true;
        }

      }) || []
    );
  }, [search, selectedCategory, setFilteredSalons, salons]);

  return (
    <Flex
      justifyContent={"center"}
      p={10}
      direction={"column"}
      alignItems={"center"}
      gap={10}
    >
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        <CategoryList
          categories={categories}
          handleOnSelected={onSelectCategory}
          selected={selectedCategory}
        />
      )}
      <Input
        placeholder="Salon name"
        size="md"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        width={["75%", "33%"]}
      />
      {isSalonsLoading ? <Spinner /> : <SalonList salons={filteredSalons} />}
    </Flex>
  );
}

export default App;
