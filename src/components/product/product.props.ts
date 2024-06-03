import { ComponentProps, ForwardedRef } from "react";
import * as Types from "@/helpers/interfaces";

export interface ProductProps extends ComponentProps<"div"> {
  product: Types.Product.Model;
}

export type ProductRefType = ForwardedRef<HTMLDivElement>;
