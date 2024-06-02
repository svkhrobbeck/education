import { ComponentProps } from "react";
import * as Types from "@/helpers/interfaces";

export interface ProductProps extends ComponentProps<"div"> {
  product: Types.Product.Model;
}
