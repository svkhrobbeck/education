import { FC } from "react";
import cx from "classnames";

import { TextareaProps } from "./textarea.props";

import cls from "./textarea.module.scss";

const Textarea: FC<TextareaProps> = ({ className, wrapperClassName, error, ...props }) => {
  return (
    <div className={cx(cls.wrapper, wrapperClassName)}>
      <textarea className={cx(cls.textarea, !!error && cls.textareaError, className)} {...props}></textarea>
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  );
};

export default Textarea;
