import { ComponentProps } from "react";
import { IChildren } from "@/helpers/interfaces";

type DivProps = ComponentProps<"div"> & IChildren;

export interface ContainerProps extends DivProps {
  type?: "default" | "mini" | "fluid";
}
