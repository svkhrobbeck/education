import { FC } from "react";
import Link from "next/link";
import cx from "classnames";

import { Logo as LogoImg } from "@/assets";
import { LogoProps } from "./logo.props";

import cls from "./logo.module.scss";

const Logo: FC<LogoProps> = ({ className, href = "/", ...props }) => {
  return (
    <Link className={cx(cls.logo, className)} href={href} {...props}>
      <LogoImg />
    </Link>
  );
};

export default Logo;
