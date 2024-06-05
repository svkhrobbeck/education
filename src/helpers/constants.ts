import * as Enums from "./enums";
import * as Types from "./interfaces";

export const navLinks = [
  { name: "Home", route: "/" },
  { name: "Courses", route: "/courses/reactjs_id" },
];

export const levelMenu: Types.Menu.Level[] = [
  { route: "books", name: "Books", iconName: "Books", id: Enums.Categories.Books },
  { route: "courses", name: "Courses", iconName: "Courses", id: Enums.Categories.Courses },
];
