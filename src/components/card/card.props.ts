import { ComponentProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type DivProps = ComponentProps<"div"> & IChildren;

export interface CardProps extends DivProps {
  color?: "white" | "primary";
}
