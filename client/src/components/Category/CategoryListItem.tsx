import { Card, Image, Text } from "@chakra-ui/react";
import { Category } from "../../models/Category";
import classes from "./CategoryListItem.module.css";

type CategoryListItemProps = {
  category: Category;
  handleOnClick: (id: number) => void;
  selected?: boolean;
};

export const CategoryListItem = ({
  category,
  selected,
  handleOnClick,
}: CategoryListItemProps) => {
  return (
    <Card
      className={classes.clickable}
      onClick={() => handleOnClick(category.id)}
      maxW="sm"
      borderRadius="lg"
      borderWidth={selected ? 1 : 0}
    >
      <Image
        src={category.img}
        background={"grey"}
        m={"10%"}
        borderRadius={"50%"}
      />
      <Text margin={"0 auto"} mt={4}>
        {category.title}
      </Text>
    </Card>
  );
};
