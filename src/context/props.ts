import * as Types from "@/helpers/interfaces";

export interface IContext {
  menu: Types.Menu.Item[];
  category: number;
  setMenu?: (menu: Types.Menu.Item[]) => void;
}
