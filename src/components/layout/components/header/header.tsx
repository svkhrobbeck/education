import { FC } from "react";
import cx from "classnames";

import { HeaderProps } from "./header.props";
import { Container } from "@/components";

import cls from "./header.module.scss";

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cx(cls.header, className)} {...props}>
      <Container className={cls.headerContainer}>Header</Container>
    </header>
  );
};

export default Header;
