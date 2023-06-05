import { Card, CardProps } from "@chakra-ui/react";
import classes from "./ClickableCard.module.css";

export const ClickableCard = (props: CardProps) => {
  return <Card {...props} className={classes.clickable}></Card>;
};
