import cx from "classnames";

import { LayoutProps } from "./layout.props";
import { Footer, Header, ScrollUp, Sidebar } from "./components";

import cls from "./layout.module.scss";

const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div className={cx(cls.layout, className)} {...props}>
      <Header className={cls.layoutHeader} />
      <main className={cls.layoutMain}>{children}</main>
      <Sidebar className={cls.layoutSidebar} />
      <Footer className={cls.layoutFooter} />
      <ScrollUp />
    </div>
  );
};

export default Layout;
