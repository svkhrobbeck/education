import * as Enums from "@/helpers/enums";
import * as Types from "@/helpers/interfaces";

export type SortReducerActions =
  | { type: Enums.Sorts.Price }
  | { type: Enums.Sorts.Rating }
  | { type: "reset"; initialState: Types.Product.Model[] };

export interface SortReducerState {
  sort: Enums.Sorts;
  products: Types.Product.Model[];
}

const sortReducer = (state: SortReducerState, action: SortReducerActions) => {
  switch (action.type) {
    case Enums.Sorts.Rating:
      return {
        sort: Enums.Sorts.Rating,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };

    case Enums.Sorts.Price:
      return {
        sort: Enums.Sorts.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    case "reset":
      return {
        sort: Enums.Sorts.Rating,
        products: action.initialState,
      };

    default:
      throw Error("Something went wrong!");
  }
};

export default sortReducer;
