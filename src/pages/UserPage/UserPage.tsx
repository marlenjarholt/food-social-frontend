import { Component, For, createEffect, createSignal } from "solid-js";
import { SmalRecipe, User } from "../../types";
import profileImage from "../../assets/megUtenVin.jpg";
import tomatoImage from "../../assets/hjemmelaget-tomatsuppe.jpg";
import pizzaImage from "../../assets/pizza-vegetar.webp";
import UserHeader from "./components/UserHeader/UserHeader";
import { faSeedling, faStar } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import styles from "./UserPage.module.scss";

enum UserPageOptions {
  recipes,
  favorites,
}

const UserPage: Component = () => {
  const user: User = {
    name: "Marlen Jarholt",
    userName: "justMarlen",
    email: "marly.marlen@gmail.com",
    followers: 204,
    following: 102,
    image: profileImage,
  };

  const recipes: SmalRecipe[] = [
    {
      id: "1",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#F4D0E9",
    },
    {
      id: "2",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#F4EDD0",
    },
    {
      id: "1",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#D0D7F4",
    },
    {
      id: "2",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#D0F4DB",
    },
    {
      id: "1",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#F4D0E9",
    },
    {
      id: "2",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#F4EDD0",
    },
    {
      id: "1",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#F4D0E9",
    },
    {
      id: "2",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#F4EDD0",
    },
    {
      id: "3",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#F4D0E9",
    },
    {
      id: "4",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#F4EDD0",
    },
    {
      id: "5",
      title: "Tomatsuppe",
      time: "20 minutter",
      numberOfSteps: 3,
      numberOfIngredients: 3,
      creatorUserId: "justMarlen",
      type: "Suppe",
      image: tomatoImage,
      color: "#F4D0E9",
    },
    {
      id: "6",
      title: "Vegetar pizza",
      time: "40 minutter",
      numberOfSteps: 6,
      numberOfIngredients: 10,
      creatorUserId: "justMarlen",
      type: "Italiensk",
      image: pizzaImage,
      color: "#F4EDD0",
    },
  ];

  const [currentOption, setCurrentOption] = createSignal<UserPageOptions>(
    UserPageOptions.recipes
  );

  createEffect(() => {
    console.log("changed", currentOption());
  });

  return (
    <div>
      <div class={styles.userPageHeader}>
        <UserHeader user={user} />
        <ButtonGroup
          idOfSelectedButton={currentOption}
          buttonProps={[
            {
              id: UserPageOptions.recipes.toString(),
              text: "Oppskrifter",
              icon: faSeedling,
              onClick: () => setCurrentOption(UserPageOptions.recipes),
            },
            {
              id: UserPageOptions.favorites.toString(),
              text: "Favoritter",
              icon: faStar,
              onClick: () => setCurrentOption(UserPageOptions.favorites),
            },
          ]}
        />
      </div>
      <div class={styles.recipeCardsContainer}>
        <For each={recipes}>{(recipe) => <RecipeCard {...recipe} />}</For>
      </div>
    </div>
  );
};
export default UserPage;
