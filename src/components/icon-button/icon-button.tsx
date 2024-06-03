import { FC } from "react";
import cx from "classnames";

import { Icon } from "..";

import cls from "./icon-button.module.scss";
import { IconButtonProps } from "./icon-button.props";

const IconButton: FC<IconButtonProps> = ({
  className,
  appearance = "primary",
  width = 20,
  height = 20,
  color = "#fff",
  name,
  ...props
}) => {
  return (
    <button className={cx(cls.iconbutton, cls[`iconbutton--${appearance}`], className)} {...props}>
      <Icon {...{ name, color, width, height }} />
    </button>
  );
};

export default IconButton;
