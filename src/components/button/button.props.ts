import { ComponentProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type BtnTagProps = ComponentProps<"button"> & IChildren;

export type ButtonProps = BtnTagProps & {
  appearance: "primary" | "ghost" | "failure" | "success";
  arrow?: "right" | "down" | "none";
  size?: "s" | "m" | "l";
};
