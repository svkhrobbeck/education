import { FC } from "react";
import cx from "classnames";

import { TextareaProps } from "./textarea.props";

import cls from "./textarea.module.scss";

const Textarea: FC<TextareaProps> = ({ className, error, ...props }) => {
  return (
    <div className={cls.wrapper}>
      <textarea className={cx(cls.textarea, !!error && cls.textareaError, className)} {...props}></textarea>
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  );
};

export default Textarea;