import { FC } from "react";

import * as Types from "@/helpers/interfaces";
import * as Utils from "@/helpers/utils";

import { Card, Icon } from "..";

import cls from "./hh-data.module.scss";

const HhData: FC<Types.Page.HhData> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {
  return (
    <div className={cls.hh}>
      <Card className={cls.count}>
        <div className={cls.title}>All Vacations</div>
        <div className={cls.countValue}>{count}</div>
      </Card>

      <Card className={cls.salary}>
        <div>
          <div className={cls.title}>Junior</div>
          <div className={cls.salaryValue}>{Utils.convertToUSD(juniorSalary)}</div>
          <div className={cls.rate}>
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
          </div>
        </div>

        <div>
          <div className={cls.title}>Middle</div>
          <div className={cls.salaryValue}>{Utils.convertToUSD(middleSalary)}</div>
          <div className={cls.rate}>
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
          </div>
        </div>

        <div>
          <div className={cls.title}>Senior</div>
          <div className={cls.salaryValue}>{Utils.convertToUSD(seniorSalary)}</div>
          <div className={cls.rate}>
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;
