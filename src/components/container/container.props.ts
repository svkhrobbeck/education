import { ComponentProps, PropsWithChildren } from "react";

type DivProps = PropsWithChildren<ComponentProps<"div">>;

export interface ContainerProps extends DivProps {
  type?: "default" | "mini" | "fluid";
}
