import { FC } from "react";
import cx from "classnames";

import { Icon } from "@/components";

import { SuccessProps } from "./success.props";

import cls from "../../review-form.module.scss";

const Success: FC<SuccessProps> = ({ setIsSuccess }) => {
  return (
    <div className={cx(cls.success, cls.panel)}>
      <div className={cls.successTitle}>Review sent successfully</div>
      <div>Thanks your review will published after testing</div>
      <Icon
        {...{ className: cls.close, name: "Close", color: "#1cc37e", width: 12, height: 12 }}
        onClick={() => setIsSuccess && setIsSuccess(false)}
      />
    </div>
  );
};
export default Success;
