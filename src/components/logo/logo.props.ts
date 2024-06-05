import { ComponentProps } from "react";

export type LogoProps = ComponentProps<"a"> & {
  variant?: "dark" | "light";
};
