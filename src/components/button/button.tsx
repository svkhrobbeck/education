import { FC } from "react";
import cx from "classnames";

import { ButtonProps } from "./button.props";

import { Icon } from "..";

import cls from "./button.module.scss";

const Button: FC<ButtonProps> = ({ children, className, appearance, size = "m", arrow = "none", ...props }) => {
  return (
    <button
      className={cx(cls.button, cls[`button--size-${size}`], cls[`button--appearance-${appearance}`], className)}
      {...props}>
      <span className={cls.button__inner}>
        <span>{children}</span>
        <Icon {...{ className: cx(cls[`button--arrow-${arrow}`]), name: "Arrow", width: 6, height: 10 }} />
      </span>
    </button>
  );
};

export default Button;