import { Button } from "@suid/material";
import { Accessor, Component } from "solid-js";
import { IconDefinition, faFlag } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import styles from "./ButtonGroupButton.module.scss";

export interface ButtonGroupButtonProps {
  id: string;
  index: number;
  text: string;
  icon?: IconDefinition;
  currentId: Accessor<any>;
  onClick: () => void;
}

const ButtonGroupButton: Component<ButtonGroupButtonProps> = ({
  id,
  index,
  text,
  icon,
  currentId,
  onClick,
}: ButtonGroupButtonProps) => {
  return (
    <Button
      classes={{
        root: `${styles.buttonStyle} ${
          `${currentId()}` === id ? styles.selectedButton : ""
        }`,
      }}
      variant="contained"
      disableRipple
      startIcon={icon ? <Fa icon={icon} /> : null}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonGroupButton;
