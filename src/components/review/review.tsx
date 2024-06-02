import { FC } from "react";

import * as Types from "@/helpers/interfaces";
import { Divider, Icon, Rating } from "..";

import cls from "./review.module.scss";

const Review: FC<Types.Product.ReviewModel> = props => {
  return (
    <>
      <div className={cls.review}>
        <Icon {...{ className: cls.user, name: "User", width: 31, height: 31, color: "#140342" }} />

        <div className={cls.reviewTitle}>
          <span className={cls.reviewName}>{props.name}</span>
          <span>{props.title}</span>
        </div>

        <div className={cls.reviewRating}>
          <Rating rating={props.rating} />
        </div>

        <div className={cls.reviewDescription}>{props.description}</div>
      </div>
      <Divider />
    </>
  );
};

export default Review;
