import { Box, Flex, Text } from "@chakra-ui/react";
import { Category } from "../../models/Category";
import { CategoryListItem } from "./CategoryListItem";

type CategoryListProps = {
  categories: Category[] | undefined;
  selected?: Category;
  handleOnSelected: (id: number) => void;
};

export const CategoryList = ({
  categories,
  selected,
  handleOnSelected,
}: CategoryListProps) => {
  if (!categories || !categories.length) {
    return (
      <Box>
        <Text>No categories!</Text>
      </Box>
    );
  }

  return (
    <Flex gap={10}>
      {categories &&
        categories.map((c) => (
          <CategoryListItem
            category={c}
            key={c.id}
            selected={c.id === selected?.id}
            handleOnClick={handleOnSelected}
          />
        ))}
    </Flex>
  );
};
