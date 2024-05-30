import * as Enums from "./enums";
import * as Types from "./interfaces";

export const levelMenu: Types.Menu.Level[] = [
  { route: "books", name: "Books", iconName: "Books", id: Enums.Categories.Books },
  { route: "courses", name: "Courses", iconName: "Courses", id: Enums.Categories.Courses },
];
