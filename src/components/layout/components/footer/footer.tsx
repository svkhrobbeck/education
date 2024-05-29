import { FC } from "react";
import cx from "classnames";

import { FooterProps } from "./footer.props";

import cls from "./footer.module.scss";

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return <footer className={cx(cls.footer, className)} {...props}></footer>;
};

export default Footer;
