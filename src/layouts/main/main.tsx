import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import ContextProvider from "@/context";
import { IContext } from "@/context/props";
import { Layout, Navbar } from "@/components";
import { Footer } from "@/components/layout/components";

const Main = <T extends Record<string, unknown> & IContext>(Component: FunctionComponent<T>) => {
  return function LayoutWithProps(props: T) {
    const router = useRouter();

    return (
      <ContextProvider menu={props.menu} category={props.category}>
        {router.asPath == "/" ? (
          <>
            <Navbar />
            <main>
              <Component {...props} />
            </main>
            <Footer />
          </>
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      </ContextProvider>
    );
  };
};

export default Main;
