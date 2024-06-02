import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import cx from "classnames";

import * as Interfaces from "./review-form.interface";
import { Button, Input, Rating, Textarea } from "..";
import { Error, Success } from "./components";

import cls from "./review-form.module.scss";
import axios from "axios";

const ReviewForm: FC<Interfaces.ReviewFormProps> = ({ className, productId, ...props }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Interfaces.ReviewFormValues>();

  const onSubmit = async (values: Interfaces.ReviewFormValues) => {
    setError(false);
    setIsSuccess(false);

    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`, { ...values, productId });
      if (status === 201) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      setError(true);
    }
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
            {...{
              control,
              name: "rating",
              rules: { required: { value: true, message: "Rating is required" } },
            }}
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
