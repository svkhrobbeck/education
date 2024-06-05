import Heading from "@/components/heading";
import { FC } from "react";

import * as Constants from "@/helpers/constants";
import Icon from "@/components/icon";

import cls from "../../landing.module.scss";

const Companies: FC = () => {
  return (
    <section className={cls.companies}>
      <Heading tag="h3">Trusted by the world&apos;s best</Heading>
      <div className={cls.icons}>
        {Constants.company.map((icon, idx) => (
          <Icon className={cls.icon} {...icon} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Companies;
