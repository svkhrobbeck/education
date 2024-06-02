import { ComponentProps } from "react";
import * as Types from "@/helpers/interfaces";

export interface ProductsProps extends ComponentProps<"section"> {
  products: Types.Product.Model[];
}
