import { FC } from "react";
import cx from "classnames";

import { TextProps } from "./text.props";

import cls from "./text.module.scss";

const Text: FC<TextProps> = ({ children, size = "m" }) => {
  return (
    <p className={cx(cls[`text--${size}`])}>{children}</p>
  );
};

export default Text;