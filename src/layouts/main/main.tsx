import { FunctionComponent } from "react";

import { IContext } from "@/context/props";
import ContextProvider from "@/context";
import { Layout } from "@/components";

const Main = <T extends Record<string, unknown> & IContext>(Component: FunctionComponent<T>) => {
  return function LayoutWithProps(props: T) {
    return (
      <ContextProvider menu={props.menu} category={props.category}>
        <Layout>
          <Component {...props} />
        </Layout>
      </ContextProvider>
    );
  };
};

export default Main;
