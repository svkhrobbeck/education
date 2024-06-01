import { FC } from "react";
import cx from "classnames";

import { SidebarProps } from "./sidebar.props";
import { Divider, Logo } from "@/components";
import { Menu } from "..";

import cls from "./sidebar.module.scss";

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <aside className={cx(cls.sidebar, className)} {...props}>
      <Logo />
      <Divider />
      <Menu />
    </aside>
  );
};

export default Sidebar;
