import { ComponentProps } from "react";

import { Icons } from "@/assets";

type NameType = keyof typeof Icons;

export type IconProps = ComponentProps<"span"> & {
  name: NameType;
  color?: string;
  width?: number;
  height?: number;
};
