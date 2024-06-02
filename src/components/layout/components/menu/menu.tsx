import { FC, Fragment } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import cx from "classnames";

import * as Constants from "@/helpers/constants";
import * as Types from "@/helpers/interfaces";
import { useContext } from "@/context";
import { Icon } from "@/components";

import cls from "./menu.module.scss";

const Menu: FC = () => {
  const { menu, setMenu, category } = useContext();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 30,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondBLock = (category: string) => {
    setMenu &&
      setMenu(
        menu.map(c => {
          if (c._id.secondCategory === category) {
            c.isOpened = !c.isOpened;
          }

          return c;
        }),
      );
  };

  const renderMenuItems = () => {
    return (
      <>
        {Constants.levelMenu.map(item => (
          <Fragment key={item.route}>
            <div className={cx(cls.menuItem, item.id === category && cls.levelActive)}>
              <Link className={cls.menuItemLink} href={`/${item.route}/${menu[0].pages[0]._id}`} />
              <Icon width={24} height={24} name={item.iconName} color="#787d85" />
              <span>{item.name}</span>
            </div>
            {item.id == category && renderAccordions(item)}
          </Fragment>
        ))}
      </>
    );
  };

  const renderAccordions = (menuItem: Types.Menu.Level) => {
    return (
      <div className={cls.accordion}>
        {menu.map(q => {
          if (q.pages.map(p => p._id).includes(router.asPath.split("/")[2])) {
            q.isOpened = true;
          }

          return (
            <div key={q._id.secondCategory}>
              <p className={cls.accordionName} onClick={() => openSecondBLock(q._id.secondCategory)}>
                {q._id.secondCategory}
              </p>
              <motion.div
                className={cls.accordionInner}
                variants={variants}
                layout
                initial={q.isOpened ? "visible" : "hidden"}
                animate={q.isOpened ? "visible" : "hidden"}
              >
                {renderAccordionItems(q.pages, menuItem.route, q.isOpened!)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderAccordionItems = (pages: Types.Menu.Page[], rotue: string, isOpen: boolean) => {
    return pages.map(p => {
      const location = `/${rotue}/${p._id}`;

      return (
        <motion.div
          className={cx(cls.accordionWrapper, isOpen && cls.accordionWrapperOpen)}
          key={p._id}
          variants={variantsChildren}
        >
          <div className={cx(cls.accordionItem, location === router.asPath && cls.accordionItemActive)}>
            <Link className={cls.accordionItemLink} href={location} />
            <span>{p.title}</span>
          </div>
        </motion.div>
      );
    });
  };

  return <div>{renderMenuItems()}</div>;
};

export default Menu;
