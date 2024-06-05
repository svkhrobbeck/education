import { FC } from "react";

import { Hero, Companies, Timeline } from "./components";

const Landing: FC = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Timeline />
    </>
  );
};

export default Landing;
