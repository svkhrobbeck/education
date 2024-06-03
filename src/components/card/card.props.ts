import { ComponentProps, ForwardedRef } from "react";

export interface CardProps extends ComponentProps<"div"> {
  color?: "white" | "primary";
}

export type CardRefType = ForwardedRef<HTMLDivElement>;
