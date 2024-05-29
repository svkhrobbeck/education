import { FC } from "react";
import cx from "classnames";

import { SidebarProps } from "./sidebar.props";

import cls from "./sidebar.module.scss";

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  return <aside className={cx(cls.sidebar, className)} {...props}></aside>;
};

export default Sidebar;
