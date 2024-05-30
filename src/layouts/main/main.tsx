import { FunctionComponent } from "react";

import { IContext } from "@/context/props";
import ContextProvider from "@/context";
import { Layout } from "@/components";

const Main = <T extends Record<string, unknown> & IContext>(Component: FunctionComponent<T>) => {
  return function LayoutWithProps(props: T) {
    return (
      <Layout>
        <ContextProvider menu={props.menu}>
          <Component {...props} />
        </ContextProvider>
      </Layout>
    );
  };
};

export default Main;
