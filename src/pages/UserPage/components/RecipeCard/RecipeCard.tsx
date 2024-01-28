import { Component } from "solid-js";
import { SmalRecipe } from "../../../../types";
import { Card, CardMedia } from "@suid/material";
import styles from "./RecipeCard.module.scss";
import Fa from "solid-fa";
import { faCarrot, faClock, faStairs } from "@fortawesome/free-solid-svg-icons";

interface RecipeCardProps extends SmalRecipe {}

const RecipeCard: Component<RecipeCardProps> = ({
  title,
  color,
  image,
  numberOfIngredients,
  numberOfSteps,
  time,
}: RecipeCardProps) => {
  return (
    <Card
      style={{ "background-color": color }}
      classes={{ root: styles.recipeCard }}
    >
      <CardMedia component="img" image={image} height={150} />
      <h4>{title}</h4>
      <p class={styles.recipeInfo}>
        <Fa icon={faCarrot} class={styles.recipeInfoIcon} />
        {numberOfIngredients} ingridienser
      </p>
      <p class={styles.recipeInfo}>
        <Fa icon={faStairs} class={styles.recipeInfoIcon} />
        {numberOfSteps} steg
      </p>
      <p class={styles.recipeInfo}>
        <Fa icon={faClock} class={styles.recipeInfoIcon} />
        {time}
      </p>
    </Card>
  );
};

export default RecipeCard;
