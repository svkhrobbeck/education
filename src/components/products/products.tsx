import { FC } from "react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";

import { ProductsProps } from "./products.props";
import { Product } from "..";

import cls from "./products.module.scss";

const Products: FC<ProductsProps> = ({ className, products, ...props }) => {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 10,
  };

  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 1 },
  };

  return (
    <section className={cx(cls.products, className)} {...props}>
      {!!products.length && (
        <AnimatePresence mode="wait">
          {products.map((product, idx) => (
            <Product key={idx} transition={spring} {...animations} layout product={product} />
          ))}
        </AnimatePresence>
      )}
    </section>
  );
};

export default Products;
