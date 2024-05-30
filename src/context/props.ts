import * as Types from "@/helpers/interfaces";

export interface IContext {
  menu: Types.Menu.Item[];
  setMenu?: (menu: Types.Menu.Item[]) => void;
}
