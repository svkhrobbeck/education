import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IChildren } from "@/helpers/interfaces";

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & IChildren;

export type TagProps = DivProps & {
  size?: "s" | "m";
  color?: "red" | "green" | "primary";
};
