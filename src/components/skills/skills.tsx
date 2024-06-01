import { FC } from "react";

import * as Types from "@/helpers/interfaces";
import { Heading, Tag } from "..";

import cls from "./skills.module.scss";

const Skills: FC<Types.Page.Model> = props => {
  return (
    <section className={cls.skills}>
      <Heading tag="h2">Skills</Heading>

      <div className={cls.skillsInner}>
        {!!props.tags.length &&
          props.tags.map(t => (
            <Tag color="primary" key={t}>
              {t}
            </Tag>
          ))}
      </div>
    </section>
  );
};

export default Skills;
