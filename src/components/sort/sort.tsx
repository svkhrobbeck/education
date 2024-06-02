import { FC } from "react";
import cx from "classnames";

import { SortEnum, SortProps } from "./sort.props";
import { Icon } from "..";

import cls from "./sort.module.scss";

const Sort: FC<SortProps> = ({ className, sort, setSort, ...props }) => {
  return (
    <div className={cx(cls.sort, className)} {...props}>
      <span className={cx(sort == SortEnum.Rating && cls.active)} onClick={() => setSort(SortEnum.Rating)}>
        <Icon {...{ className: cls.sortIcon, name: "Sort", width: 20, height: 13, color: "#140342" }} /> Rating
      </span>

      <span className={cx(sort == SortEnum.Price && cls.active)} onClick={() => setSort(SortEnum.Price)}>
        <Icon {...{ className: cls.sortIcon, name: "Sort", width: 20, height: 13, color: "#140342" }} /> Price
      </span>
    </div>
  );
};

export default Sort;
