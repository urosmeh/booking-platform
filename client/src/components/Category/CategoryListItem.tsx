import { Image, Show, Text } from "@chakra-ui/react";
import { Category } from "../../models/Category";
import { ClickableCard } from "../../ui/ClickableCard";

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
    <ClickableCard
      onClick={() => handleOnClick(category.id)}
      maxW="sm"
      borderRadius="lg"
      borderWidth={selected ? 1 : 0}
      filter={!selected ? "blur(1px)" : ""}
    >
      <Image
        src={category.img}
        background={"grey"}
        m={"10%"}
        borderRadius={"50%"}
      />
      <Show breakpoint="(min-width: 400px)">
        <Text margin={"0 auto"} mt={4}>
          {category.title}
        </Text>
      </Show>
    </ClickableCard>
  );
};
