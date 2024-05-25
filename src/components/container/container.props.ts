import { IChildren } from "@/helpers/interfaces";

export interface ContainerProps extends IChildren {
  type?: "default" | "mini" | "fluid";
}
