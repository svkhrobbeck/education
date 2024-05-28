import { FC } from "react";
import cx from "classnames";

import { CardProps } from "./card.props";

import cls from "./card.module.scss";

const Card: FC<CardProps> = ({ className, children, color = "primary", ...props }) => {
  return (
    <div className={cx(cls.card, className, cls[`card--${color}`])} {...props}>{children}</div>
  );
};

export default Card;