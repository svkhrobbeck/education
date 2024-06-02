import { ComponentProps, PropsWithChildren } from "react";

type BtnTagProps = PropsWithChildren<ComponentProps<"button">>;

export type ButtonProps = BtnTagProps & {
  appearance: "primary" | "ghost" | "failure" | "success";
  arrow?: "right" | "down" | "none";
  size?: "s" | "m" | "l";
};
