import { FC } from "react";
import cx from "classnames";

import { SidebarProps } from "./sidebar.props";
import { Divider } from "@/components";
import { Menu, Search, Logo } from "..";

import cls from "./sidebar.module.scss";

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <aside className={cx(cls.sidebar, className)} {...props}>
      <div className={cls.sidebarInner}>
        <Logo />
        <Divider />
        <Search />
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
