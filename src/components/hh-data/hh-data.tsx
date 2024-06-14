import { FC } from "react";

import * as Utils from "@/helpers/utils";
import { HhDataProps } from "./hh-data.props";

import { Card, Heading, Icon, Tag } from "..";

import cls from "./hh-data.module.scss";

const HhData: FC<HhDataProps> = props => {
  return (
    <section className={cls.hh}>
      <div className={cls.header}>
        <Heading tag="h2">Vakansiyalar - {props.category}</Heading>
        <Tag color="red" size="m">
          hh.uz
        </Tag>
      </div>

      <div className={cls.hhInner}>
        <Card className={cls.count}>
          <div className={cls.title}>Barcha Vakansiyalar</div>
          <div className={cls.countValue}>{props?.hh?.count}</div>
        </Card>

        <Card className={cls.salary}>
          <div>
            <div className={cls.title}>Junior</div>
            <div className={cls.salaryValue}>{Utils.convertToUSD(props?.hh?.juniorSalary)}</div>
            <div className={cls.rate}>
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            </div>
          </div>

          <div>
            <div className={cls.title}>Middle</div>
            <div className={cls.salaryValue}>{Utils.convertToUSD(props?.hh?.middleSalary)}</div>
            <div className={cls.rate}>
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            </div>
          </div>

          <div>
            <div className={cls.title}>Senior</div>
            <div className={cls.salaryValue}>{Utils.convertToUSD(props?.hh?.seniorSalary)}</div>
            <div className={cls.rate}>
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
              <Icon {...{ className: cls.filled, name: "Rate", color: "#bbb", width: 21, height: 21 }} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HhData;
