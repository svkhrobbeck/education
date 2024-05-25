import { FC } from "react";
import cx from "classnames";

import { ContainerProps } from "./container.props";

import cls from "./container.module.scss";

const Container: FC<ContainerProps> = ({ children, type = "default" }) => {
  return (
    <div className={cx(cls.container, cls[`container--${type}`])}>{children}</div>
  );
};

export default Container;