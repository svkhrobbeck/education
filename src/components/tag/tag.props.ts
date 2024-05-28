import { ComponentProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type DivProps = ComponentProps<"div"> & IChildren;

export type TagProps = DivProps & {
  size?: "s" | "m";
  color?: "red" | "green" | "primary";
};
