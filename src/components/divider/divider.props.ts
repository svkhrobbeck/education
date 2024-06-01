import { ComponentProps } from "react";

export type DividerProps = ComponentProps<"hr"> & {
  direction?: "horizontal" | "vertical";
};
