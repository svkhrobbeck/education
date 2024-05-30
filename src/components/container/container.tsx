import { FC } from "react";
import cx from "classnames";

import { ContainerProps } from "./container.props";

import cls from "./container.module.scss";

const Container: FC<ContainerProps> = ({ children, className, type = "default" }) => {
  return <div className={cx(cls.container, cls[`container--${type}`], className)}>{children}</div>;
};

export default Container;
