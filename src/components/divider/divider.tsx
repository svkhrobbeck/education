import { FC } from "react";
import cx from "classnames";

import { DividerProps } from "./divider.props";

import cls from "./divider.module.scss";

const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return (
    <hr className={cx(cls.divider, className)} {...props} />
  );
};

export default Divider;