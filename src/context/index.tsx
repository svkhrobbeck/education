import { createContext, PropsWithChildren, useContext as useCtx, useEffect, useState } from "react";

import * as Types from "@/helpers/interfaces";
import { IContext } from "./props";

const initialValue = {
  menu: [],
  category: 0,
  setMenu: () => {},
};

const Context = createContext<IContext>(initialValue);

const ContextProvider = ({ children, category, ...props }: PropsWithChildren<Omit<IContext, "setMenu">>) => {
  const [menu, setMenu] = useState<Types.Menu.Item[]>(props.menu);

  useEffect(() => {
    setMenu(props?.menu);
    // eslint-disable-next-line
  }, []);

  return <Context.Provider value={{ menu, setMenu, category }}>{children}</Context.Provider>;
};

export const useContext = () => useCtx(Context);

export default ContextProvider;
