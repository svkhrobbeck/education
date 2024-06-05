import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/helpers/constants";

import { IconButton, Logo, Search, Text } from "@/components";

import cls from "./navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffnes: 20,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={cls.navbar}>
      <nav className={cls.nav}>
        <Logo className={cls.logo} variant="light" />
        <div className={cls.navigation}>
          {navLinks.map((nav, idx) => (
            <Link className={cls.navLink} href={nav.route} key={idx}>
              <Text className={cls.navTitle}>{nav.name}</Text>
            </Link>
          ))}
          <Search />
        </div>
        <div className={cls.mobileIcon}>
          <IconButton
            onClick={toggleOpen}
            name={isOpen ? "BigClose" : "Menu"}
            appearance="white"
            width={20}
            height={20}
          />
        </div>
        <motion.div
          className={cls.mobileMenu}
          variants={variants}
          initial={"closed"}
          animate={isOpen ? "opened" : "closed"}
        >
          {navLinks.map((nav, idx) => (
            <Link href={nav.route} key={idx} className={cls.navLink}>
              <Text>{nav.name}</Text>
            </Link>
          ))}
          <Search className={cls.search} />
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
