import { FC } from "react";
import Image from "next/image";

import { HeroImg } from "@/assets/images";
import { Button, Heading, Text } from "@/components";

import cls from "../../landing.module.scss";

const Hero: FC = () => {
  return (
    <div className={cls.hero}>
      <div className={cls.heroTitle}>
        <Heading tag="h1">
          Yangi Ko&apos;nikmalarni <span>Education</span>da Onlayn O&apos;rganing
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla adipisci temporibus ad, veniam blanditiis
          optio voluptatibus eius id, eaque, ex aperiam quam voluptatum deleniti quos? Quis voluptatum rem quaerat.
        </Text>
        <Button appearance="success" arrow="right">
          Bepul qo&apos;shilish
        </Button>
      </div>
      <div className={cls.heroImage}>
        <Image src={HeroImg} alt="hero-image" width={600} height={500} />
      </div>
    </div>
  );
};

export default Hero;
