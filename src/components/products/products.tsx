import { FC } from "react";
import cx from "classnames";

import { ProductsProps } from "./products.props";
import { Product } from "..";

import cls from "./products.module.scss";

const Products: FC<ProductsProps> = ({ className, products, ...props }) => {
  // const spring = {
  //   type: "spring",
  //   stiffness: 500,
  //   damping: 10,
  // };

  // const animations = {
  //   initial: { scale: 0 },
  //   animate: { scale: 1 },
  //   exit: { scale: 1 },
  // };

  return (
    <section className={cx(cls.products, className)} {...props}>
      {/* <AnimatePresence>
        {state.products.map((c, idx) => <Product layout transition={spring} {...animations} product={c} />)}
      </AnimatePresence> */}
      {!!products.length && products.map((product, idx) => <Product key={idx} product={product} />)}
    </section>
  );
};

export default Products;
