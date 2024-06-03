import { FC, useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import { HeaderProps } from "./header.props";

import { Container, IconButton } from "@/components";
import { Sidebar, Logo } from "..";

import cls from "./header.module.scss";

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffnes: 20,
      },
    },
    hidden: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={cx(cls.header, className)} {...props}>
      <Container className={cls.headerContainer}>
        <Logo />
        {isOpen ? (
          <IconButton
            {...{
              className: cls.closeIcon,
              name: "BigClose",
              width: 19,
              height: 19,
              color: "#140342",
              appearance: "white",
            }}
            onClick={toggleMenu}
          />
        ) : (
          <IconButton
            {...{ name: "Menu", width: 20, height: 17, color: "#140342", appearance: "white" }}
            onClick={toggleMenu}
          />
        )}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className={cls.mobileMenu}
        >
          <Sidebar />
        </motion.div>
      </Container>
    </header>
  );
};

export default Header;
