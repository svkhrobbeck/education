import { FC } from "react";
import cx from "classnames";

import { HeadingProps } from "./heading.props";

import cls from "./heading.module.scss";

const Heading: FC<HeadingProps> = ({ children, tag, className, ...props }) => {
  switch (tag) {
    case "h1":
      return <h1 className={cx(cls[`heading--${tag}`], className)} {...props}>{children}</h1>;

    case "h2":
      return <h2 className={cx(cls[`heading--${tag}`], className)} {...props}>{children}</h2>;

    case "h3":
      return <h3 className={cx(cls[`heading--${tag}`], className)} {...props}>{children}</h3>;

    default:
      return <>{children}</>;
  }

};

export default Heading;