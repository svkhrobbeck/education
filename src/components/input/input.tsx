import { FC, forwardRef } from "react";
import cx from "classnames";

import * as Props from "./input.props";

import cls from "./input.module.scss";

const Input: FC<Props.InputProps> = forwardRef(
  ({ wrapperClassName, className, error, ...props }, ref: Props.InputRefType) => (
    <div className={cx(cls.wrapper, wrapperClassName)}>
      <input className={cx(cls.input, !!error && cls.inputError, className)} ref={ref} {...props} />
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  ),
);

export default Input;
