import { ComponentProps } from "react";

import * as Enums from "@/helpers/enums";

export interface SortProps extends ComponentProps<"div"> {
  sort: Enums.Sorts;
  setSort: (sort: Enums.Sorts) => void;
}
