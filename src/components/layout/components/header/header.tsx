import { FC } from "react";
import cx from "classnames";

import { HeaderProps } from "./header.props";

import cls from "./header.module.scss";

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return <header className={cx(cls.header, className)} {...props}></header>;
};

export default Header;
