import { Accessor, Component, For } from "solid-js";
import styles from "./ButtonGroup.module.scss";
import ButtonGroupButton, { ButtonGroupButtonProps } from "./ButtonGroupButton";

interface ButtonGroupProps {
  idOfSelectedButton: Accessor<any>;
  buttonProps: Omit<ButtonGroupButtonProps, "index" | "currentId">[];
}

const ButtonGroup: Component<ButtonGroupProps> = ({
  idOfSelectedButton,
  buttonProps,
}: ButtonGroupProps) => {
  console.log(idOfSelectedButton);
  return (
    <div class={styles.buttonGroupContainer}>
      <For each={buttonProps}>
        {(props, index) => (
          <ButtonGroupButton
            {...props}
            index={index()}
            currentId={idOfSelectedButton}
          />
        )}
      </For>
    </div>
  );
};

export default ButtonGroup;
