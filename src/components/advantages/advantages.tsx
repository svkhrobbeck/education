import { FC } from "react";

import { AdvantagesProps } from "./advantages.props";
import { Divider, Heading, Icon, Text } from "..";

import cls from "./advantages.module.scss";

const Advantages: FC<AdvantagesProps> = props => {
  return (
    <section className={cls.advantages}>
      <Heading className={cls.heading} tag="h2">
        Afzalliklari
      </Heading>

      {!!props.advantages.length &&
        props.advantages.map(c => (
          <div key={c.id} className={cls.advantage}>
            <Icon {...{ name: "Check", width: 50, height: 50 }} />
            <Heading className={cls.title} tag="h3">
              {c.title}
            </Heading>

            <Divider direction="vertical" />
            <div className={cls.description}>{c.description}</div>
          </div>
        ))}

      <Text>{props.description}</Text>
    </section>
  );
};

export default Advantages;
