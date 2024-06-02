import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import cx from "classnames";

import * as Interfaces from "./review-form.interface";
import { Button, Input, Rating, Textarea } from "..";
import { Error, Success } from "./components";

import cls from "./review-form.module.scss";

const ReviewForm: FC<Interfaces.ReviewFormProps> = ({ className, productId, ...props }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Interfaces.IReviewForm>();

  const onSubmit = async () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cx(cls.reviewForm, className)} {...props}>
        <Input
          className={cls.name}
          {...register("name", { required: { value: true, message: "Name is required" } })}
          placeholder="Name"
          error={errors.name}
        />
        <Input
          className={cls.title}
          {...register("title", { required: { value: true, message: "Title is required" } })}
          placeholder="Title"
          error={errors.title}
        />
        <div className={cls.rating}>
          <span>Rating: </span>
          <Controller
            rules={{ required: { value: true, message: "Rating is required" } }}
            control={control}
            name={"rating"}
            render={({ field }) => (
              <Rating editable rating={field.value} error={errors.rating} ref={field.ref} setRating={field.onChange} />
            )}
          />
        </div>
        <Textarea
          wrapperClassName={cls.description}
          {...register("description", { required: { value: true, message: "Description is required" } })}
          placeholder="Description"
          error={errors.description}
        />
        <div className={cls.submit}>
          <Button appearance="primary">Submit</Button>
          <span className={cls.info}>* Your review will be moderated and reviewed before being published.</span>
        </div>
      </div>

      {isSuccess && <Success setIsSuccess={setIsSuccess} />}

      {error && <Error setError={setError} />}
    </form>
  );
};

export default ReviewForm;
