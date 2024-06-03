import { forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import * as Utils from "@/helpers/utils";
import * as Props from "./product.props";
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from "..";

import cls from "./product.module.scss";

const Product = motion<Props.ProductProps>(
  forwardRef(({ product, className, ...props }: Props.ProductProps, ref: Props.ProductRefType): JSX.Element => {
    const [reviewOpen, setReviewOpen] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
      visible: {
        opacity: 1,
        height: "auto",
      },
      hidden: {
        opacity: 0,
        height: 0,
      },
    };

    const scrollToReview = () => {
      setReviewOpen(true);
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <div className={cx(cls.wrapper, className)} ref={ref} {...props}>
        <Card className={cls.product} color="white">
          <div className={cls.title}>{product.title}</div>
          <div className={cls.price}>
            {Utils.convertToUSD(product.price)}
            {product.oldPrice && (
              <Tag color="green" className={cls.oldPrice}>
                {Utils.convertToUSD(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={cls.credit}>
            {Utils.convertToUSD(product.credit)}/<span className={cls.month}>month</span>
          </div>
          <div className={cls.rating}>
            <Rating rating={product.initialRating} />
          </div>
          <div className={cls.tags}>
            {product.tags.length &&
              product.tags.map(t => (
                <Tag key={t} className={cls.category} color={"primary"}>
                  {t}
                </Tag>
              ))}
          </div>
          <div className={cls.priceTitle}>Price</div>
          <div className={cls.creditTitle}>Credit</div>
          <div className={cls.ratingTitle}>
            <span className={cls.reviewScoller} onClick={scrollToReview}>
              {product.reviewCount} {Utils.dedectedReview(product.reviewCount)}
            </span>
          </div>

          <Divider className={cls.hr} />

          <div className={cls.description}>{product.description}</div>

          <div className={cls.features}>
            {!!product.characteristics.length &&
              product.characteristics.map(ch => (
                <div className={cls.characteristic} key={ch.name}>
                  <span className={cls.characteristicName}>{ch.name}</span>
                  <span className={cls.characteristicDots} />
                  <span className={cls.characteristicValue}>{ch.value}</span>
                </div>
              ))}
          </div>

          <div className={cls.advBlock}>
            {product?.advantages && (
              <div className={cls.advantages}>
                <div className={cls.advantageTitle}>Advantages</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product?.disadvantages && (
              <div className={cls.disadvantages}>
                <div className={cls.disadvantageTitle}>Disadvantages</div>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>

          <Divider className={cls.hr2} />

          <div className={cls.actions}>
            <Button appearance="primary">More Details</Button>
            <Button
              appearance="ghost"
              arrow={reviewOpen ? "down" : "right"}
              className={cls.reviewBtn}
              onClick={() => setReviewOpen(prev => !prev)}
            >
              Review
            </Button>
          </div>
        </Card>

        <motion.div animate={reviewOpen ? "visible" : "hidden"} variants={variants} initial={"hidden"}>
          <Card className={cls.reviews} ref={reviewRef}>
            {!!product.reviews.length && product.reviews.map(r => <Review {...r} key={r._id} />)}
            <ReviewForm productId={product._id} />
          </Card>
        </motion.div>
      </div>
    );
  }),
);

export default Product;
