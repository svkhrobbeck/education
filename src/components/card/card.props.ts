import { ComponentProps, ForwardedRef } from "react";

export type CardProps = ComponentProps<"div"> & {
  appearance?: "primary" | "white";
};

export type CardRefType = ForwardedRef<HTMLDivElement>;
