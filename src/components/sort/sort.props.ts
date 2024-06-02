import { ComponentProps } from "react";

export interface SortProps extends ComponentProps<"div"> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}
