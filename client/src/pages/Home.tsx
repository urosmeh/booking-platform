import { Box } from "@chakra-ui/react";
import { useGetCategoriesQuery, useGetSalonsQuery } from "../store";
import { Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { SalonList } from "../components/Salon/SalonList";
import { useState } from "react";
import { CategoryList } from "../components/Category/CategoryList";
import { Category } from "../models/Category";
import useFilteredSalons from "../hooks/useFilteredSalons";

export const Home = () => {
  const { data: salons, isLoading: isSalonsLoading } = useGetSalonsQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const onSelectCategory = (id: number) => {
    if (selectedCategory?.id === id) {
      setSelectedCategory(undefined);
      return;
    }
    setSelectedCategory(categories?.find((c) => c.id === id));
  };

  const filteredSalons = useFilteredSalons({
    search,
    selectedCategory,
    salons,
  });

  return (
    <Box>
      <Flex
        justifyContent={"center"}
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
        {selectedCategory && <Text>Category: {selectedCategory?.title}</Text>}
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
    </Box>
  );
};
