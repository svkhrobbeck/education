import { ComponentProps } from "react";

import { IconProps } from "../icon/icon.props";

export type IconButtonProps = IconProps & ComponentProps<"button"> & { appearance?: "primary" | "white" };
