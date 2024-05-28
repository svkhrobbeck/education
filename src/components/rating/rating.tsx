import { FC, Fragment, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";

import { RatingProps } from "./rating.props";
import Icon from "../icon";

import cls from "./rating.module.scss";

const Rating: FC<RatingProps> = ({ rating, editable, setRating, error, className, ...props }) => {
  const initialRateRef = useRef(rating);
  const [isClicked, setIsClicked] = useState(false);
  const [ratings, setRatings] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    setRatings(ratings.map((_, idx) => (
      <Icon
        key={idx}
        {...{
          className: cx(cls.star, idx < rating && cls.starFilled, editable && cls.starEditable),
          name: "Star",
          height: 20,
          width: 20,
          ...(editable ? {
            onClick: () => {
              setIsClicked(true);
              setRating && isClicked && setRating(rating);
              initialRateRef.current = rating;
            },
            onMouseLeave: () => {
              setRating && setRating(initialRateRef.current);
              setIsClicked(true);
            },
            onMouseEnter: () => {
              setRating && setRating(idx + 1);
              setIsClicked(false);
            },
          } : {})
        }}
      />
    )));
    // eslint-disable-next-line
  }, [rating]);

  return (
    <div className={cx(cls.rating, !!error && cls.ratingErorr, className)} {...props}>
      {ratings.map(rating => <Fragment key={uuidv4()}>{rating}</Fragment>)}
      {!!error && <span className={cls.error}>{error.message}</span>}
    </div>
  );
};

export default Rating;