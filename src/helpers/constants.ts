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

export const company: Types.ICompany[] = [
  {
    name: "Amazon",
    width: 84,
    height: 26,
  },
  {
    name: "Amd",
    width: 83,
    height: 20,
  },
  {
    name: "Cisco",
    width: 74,
    height: 42,
  },
  {
    name: "Dropcam",
    width: 122,
    height: 24,
  },
  {
    name: "Logitech",
    width: 82,
    height: 25,
  },
  {
    name: "Spotify",
    width: 99,
    height: 30,
  },
];
