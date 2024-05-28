import { ComponentProps } from "react";

export interface IconProps extends ComponentProps<"span"> {
  height?: number;
  width?: number;
  name: string;
  color?: string;
}
