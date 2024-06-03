import { FC, forwardRef } from "react";
import cx from "classnames";

import * as Props from "./card.props";

import cls from "./card.module.scss";

const Card: FC<Props.CardProps> = forwardRef(
  ({ className, children, color = "primary", ...props }, ref: Props.CardRefType) => (
    <div className={cx(cls.card, className, cls[`card--${color}`])} ref={ref} {...props}>
      {children}
    </div>
  ),
);

export default Card;
