import { FunctionComponent } from "react";

import { Layout } from "@/components";

const Main = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function LayoutWithProps(props: T) {
    return (
      <Layout>
        <Component {...props} />;
      </Layout>
    );
  };
};

export default Main;
