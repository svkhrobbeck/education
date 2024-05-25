import React from "react";
import cx from "classnames";
import get from "lodash/get";

import { IconProps } from "./icon.props";

import * as List from "./list";

import cls from "./icon.module.scss";

const Icon: React.FC<IconProps> = ({ name, width, height, className, color, onClick }) => {
  const Component = get(List, `${name}`);

  const style = {
    ...(color ? { "--color": color } : {}),
    ...(width ? { "--width": `${width}px` } : {}),
    ...(height ? { "--height": `${height}px` } : {}),
    color,
  } as React.CSSProperties;

  if (!Component) {
    console.log("Icon component not found");
    return null;
  }

  return (
    <span {...{ className: cx(cls.wrapper, className), onClick, style }}>
      {React.createElement(Component)}
    </span>
  );
};

export default Icon;
