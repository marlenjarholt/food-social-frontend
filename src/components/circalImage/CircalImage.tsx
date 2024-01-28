import { Avatar } from "@suid/material";
import { Component } from "solid-js";
import styles from "./CircalImage.module.scss";

interface CircalImageProps {
  src?: string;
  alt: string;
}

const CircalImage: Component<CircalImageProps> = ({
  src,
  alt,
}: CircalImageProps) => {
  return <Avatar classes={{ root: styles.icon }} src={src} alt={alt} />;
};

export default CircalImage;
