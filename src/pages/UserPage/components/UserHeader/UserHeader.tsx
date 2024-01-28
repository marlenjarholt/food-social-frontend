import { Component } from "solid-js";
import { User } from "../../../../types";
import CircalImage from "../../../../components/circalImage/CircalImage";
import styles from "./UserHeader.module.scss";

interface UserHeaderProps {
  user: User;
}

const UserHeader: Component<UserHeaderProps> = ({ user }: UserHeaderProps) => {
  return (
    <div class={styles.userHeaderContainer}>
      <div class={styles.imageAndNameContainer}>
        <CircalImage src={user.image} alt={user.name} />
        <div>
          <h3>{user.name}</h3>
          <h5>@{user.userName}</h5>
        </div>
      </div>
      <div class={styles.followerContainer}>
        <h4>Følgere: {user.followers}</h4>
        <h4>Følger: {user.following}</h4>
      </div>
    </div>
  );
};

export default UserHeader;
