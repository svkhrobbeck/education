import { ComponentProps } from "react";

import { IConsType } from "@/helpers/interfaces";

export type IconProps = ComponentProps<"span"> & {
  name: IConsType;
  color?: string;
  width?: number;
  height?: number;
};
