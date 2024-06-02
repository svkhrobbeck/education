import { FC } from "react";
import cx from "classnames";

import { ErrorProps } from "./error.props";
import { Icon } from "@/components";

import cls from "../../review-form.module.scss";

const Error: FC<ErrorProps> = ({ setError }) => {
  return (
    <div className={cx(cls.error, cls.panel)}>
      <div className={cls.successTitle}>Something went wrong!</div>
      <Icon
        {...{ className: cls.close, name: "Close", color: "#1cc37e", width: 12, height: 12 }}
        onClick={() => setError && setError(false)}
      />
    </div>
  );
};

export default Error;
