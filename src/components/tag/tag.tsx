import { FC } from "react";
import cx from "classnames";

import { TagProps } from "./tag.props";


import cls from "./tag.module.scss";

const Tag: FC<TagProps> = ({ children, className, size = "m", color = "primary", ...props }) => {
  return (
    <div className={cx(cls.tag, cls[`tag--size-${size}`], cls[`tag--color-${color}`], className)} {...props}>
      {children}
    </div>
  );
};

export default Tag;