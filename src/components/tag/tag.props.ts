import { ComponentProps, PropsWithChildren } from "react";

type DivProps = PropsWithChildren<ComponentProps<"div">>;

export type TagProps = DivProps & {
  size?: "s" | "m";
  color?: "red" | "green" | "primary";
};
