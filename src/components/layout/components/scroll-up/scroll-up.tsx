import { FC } from "react";
import { motion } from "framer-motion";

import { useScrollY } from "@/hooks";
import { IconButton } from "@/components";

import cls from "./scroll-up.module.scss";

const ScrollUp: FC = () => {
  const scrollY = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollY > 150 && (
        <motion.button
          className={cls.scrollUp}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          onClick={scrollToTop}
        >
          <IconButton {...{ name: "Up", width: 21, height: 13, color: "#fff" }} />
        </motion.button>
      )}
    </>
  );
};

export default ScrollUp;
