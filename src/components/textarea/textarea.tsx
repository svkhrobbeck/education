import { FC, forwardRef } from "react";
import cx from "classnames";

import * as Props from "./textarea.props";

import cls from "./textarea.module.scss";

const Textarea: FC<Props.TextareaProps> = forwardRef(
  ({ className, wrapperClassName, error, ...props }, ref: Props.TextareaRefType) => (
    <div className={cx(cls.wrapper, wrapperClassName)}>
      <textarea className={cx(cls.textarea, !!error && cls.textareaError, className)} ref={ref} {...props} />
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  ),
);

export default Textarea;
