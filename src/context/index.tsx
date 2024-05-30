import { createContext, PropsWithChildren, useContext as useCtx, useState } from "react";

import * as Types from "@/helpers/interfaces";
import { IContext } from "./props";

const initialValue = {
  menu: [],
  setMenu: () => {},
};

const Context = createContext<IContext>(initialValue);

const ContextProvider = ({ children, menu: initialMenu }: PropsWithChildren<Omit<IContext, "setMenu">>) => {
  const [menu, setMenu] = useState<Types.Menu.Item[]>(initialMenu);

  return <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>;
};

export const useContext = () => useCtx(Context);

export default ContextProvider;
