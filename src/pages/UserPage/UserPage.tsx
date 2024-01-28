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

  const [currentOption, setCurrentOption] = createSignal<UserPageOptions>(
    UserPageOptions.recipes
  );

  const [recipes, setResipes] = createSignal<SmalRecipe[]>();

  createEffect(() => {
    console.log("changed", currentOption());
  });

  createEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:9090/recipes", {
        method: "GET",
      });

      if (!response.ok) return;

      const data = await response.json();
      setResipes(data);
    };

    fetchRecipes();
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
        <For each={recipes()}>{(recipe) => <RecipeCard {...recipe} />}</For>
      </div>
    </div>
  );
};
export default UserPage;
