import { FC } from "react";
import Link from "next/link";
import cx from "classnames";

import { Images } from "@/assets";
import { LogoProps } from "./logo.props";

import cls from "./logo.module.scss";

const Logo: FC<LogoProps> = ({ className, variant = "dark", href = "/", ...props }) => {
  return (
    <Link className={cx(cls.logo, className)} href={href} {...props}>
      {variant === "dark" ? <Images.LogoDark /> : <Images.LogoLight />}
    </Link>
  );
};

export default Logo;
