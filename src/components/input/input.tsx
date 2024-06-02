import { FC } from "react";
import cx from "classnames";

import { InputProps } from "./input.props";

import cls from "./input.module.scss";

const Input: FC<InputProps> = ({ wrapperClassName, className, error, ...props }) => {
  return (
    <div className={cx(cls.wrapper, wrapperClassName)}>
      <input className={cx(cls.input, !!error && cls.inputError, className)} {...props} />
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  );
};

export default Input;
