import { FC } from "react";
import cx from "classnames";

import { SortProps } from "./sort.props";
import * as Enums from "@/helpers/enums";
import { Icon } from "..";

import cls from "./sort.module.scss";

const Sort: FC<SortProps> = ({ className, sort, setSort, ...props }) => {
  return (
    <div className={cx(cls.sort, className)} {...props}>
      <span className={cx(sort === Enums.Sorts.Rating && cls.active)} onClick={() => setSort(Enums.Sorts.Rating)}>
        <Icon {...{ className: cls.sortIcon, name: "Sort", width: 20, height: 13, color: "#140342" }} /> Rating
      </span>

      <span className={cx(sort === Enums.Sorts.Price && cls.active)} onClick={() => setSort(Enums.Sorts.Price)}>
        <Icon {...{ className: cls.sortIcon, name: "Sort", width: 20, height: 13, color: "#140342" }} /> Price
      </span>
    </div>
  );
};

export default Sort;
