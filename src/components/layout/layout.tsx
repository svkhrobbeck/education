import { IChildren } from "@/helpers/interfaces";
import { Footer, Header, Sidebar } from "./components";

const Layout = ({ children }: IChildren) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
