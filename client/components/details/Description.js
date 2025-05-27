import React, { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import Modal from "../shared/Modal";
import Image from "next/image";
import { useAddReviewMutation } from "@/services/review/reviewApi";
import { toast } from "react-hot-toast";
import Inform from "../icons/Inform";
import { useSelector } from "react-redux";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Spinner from "../shared/Spinner";

const Description = ({ product }) => {
  const { handleSubmit, control, reset } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [addReview, { isLoading, data, error }] = useAddReviewMutation();
  const locale = useLocale();
  const h = useTranslations("product");
  const t = useTranslations("reviews");

  console.log("product", product);
  useEffect(() => {
    if (isLoading) {
      toast.loading(h("addReviewLoading"), { id: "addReview" });
    }

    if (data) {
      toast.success(data?.description, { id: "addReview" });
    }
    if (error?.data) {
      toast.error(error?.data?.description, { id: "addReview" });
    }
  }, [isLoading, data, error, h]);

  const handleAddReview = (data) => {
    addReview({
      ...data,
      targetId: product._id,
      targetType: "product",
      comment: data.comment
    });
  };

  const getRandomAvatar = () => {
    const total = 50;
    const randomIndex = Math.floor(Math.random() * total) + 1;
    return `/avatar/male/${randomIndex}.png`;
  };
  const translation =
    product?.translations?.find((tr) => tr.translation?.language === locale)
      ?.translation?.fields || {};
  const { summary, features = [] } = translation;

  return (
    <section className="flex flex-col gap-y-2.5">
      <div className="flex flex-row gap-x-2 items-center">
        <span className="whitespace-nowrap text-sm text-black dark:text-gray-100">
          {h("details")}
        </span>
        <hr className="w-full" />
      </div>
      <article className="flex flex-col gap-y-4">
        <p className="text-sm">{summary}</p>
        <button
          className="px-8 py-2 border cursor-pointer border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {h("reviews")}
        </button>
        <div className="flex flex-row gap-x-2 items-center">
          <span className="whitespace-nowrap text-sm text-black dark:text-gray-100">
            {h("features")}
          </span>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col gap-y-4">
          {features.length > 0 ? (
            features.map((explanation, index) => (
              <DetailCard
                key={index}
                icon={explanation.icon}
                title={explanation.title}
                content={explanation.content}
              />
            ))
          ) : (
            <p className="text-sm">{h("noFeatures")}</p>
          )}
        </div>
      </article>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="p-6 lg:w-1/3 md:w-1/2 w-full h-[550px] dark:bg-slate-900"
        >
          <section className="h-full flex flex-col gap-y-6">
            <article className="flex flex-col gap-y-2">
              <h2 className="text-2xl drop-shadow">{t("modalTitle")}</h2>

              <ul className="text-sm list-disc list-inside">
                <li>{t("commentLimit")}</li>
                <li>{t("starLimit")}</li>
              </ul>
              <form
                className="w-full flex flex-col gap-y-4"
                onSubmit={handleSubmit(handleAddReview)}
              >
                <Controller
                  control={control}
                  name="comment"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      name="comment"
                      id="comment"
                      rows="5"
                      maxLength="500"
                      placeholder={t("placeholder")}
                      className="w-full"
                    ></textarea>
                  )}
                />

                <Controller
                  name="rating"
                  control={control}
                  defaultValue={1}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <p className="flex flex-row justify-center items-center gap-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`cursor-pointer ${
                            star <= field.value ? "text-primary" : ""
                          }`}
                          onClick={() => field.onChange(star)}
                        >
                          {star <= field.value ? (
                            <IoIosStar className="h-6 w-6" />
                          ) : (
                            <IoIosStarOutline className="h-6 w-6" />
                          )}
                        </button>
                      ))}
                    </p>
                  )}
                />

                <button
                  type="submit"
                  className="px-8 mx-auto py-2 border border-primary rounded-secondary bg-primary hover:bg-primary/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center"
                >
                  {isLoading ? <Spinner /> : <>{t("submit")}</>}
                </button>
              </form>
            </article>

            {product?.reviews?.length === 0 ? (
              <p className="text-sm flex flex-row gap-x-1 items-center justify-center">
                <Inform /> {h("noReviews")}
              </p>
            ) : (
              <div className="h-full overflow-y-auto scrollbar-hide flex flex-col gap-y-4">
                {product?.reviews?.map((review, index) => (
                  <article
                    key={index}
                    className="flex flex-col gap-y-2 p-4 bg-slate-50 rounded"
                  >
                    <div className="flex flex-row gap-x-2">
                      <Image
                        src={review?.reviewer?.avatar?.url || getRandomAvatar()}
                        alt={review?.reviewer?.avatar?.public_id || "avatar"}
                        width={40}
                        height={40}
                        className="rounded object-cover h-[40px] w-[40px]"
                      />
                      <div className="flex flex-col gap-y-1">
                        <h2 className="text-base">
                          {review?.reviewer?.name || "کاربر مهمان"}
                        </h2>
                        <p className="text-xs">{review?.reviewer?.email}</p>
                        <p className="text-xs">
                          {new Date(review?.createdAt).toLocaleDateString(
                            locale
                          )}{" "}
                          • ⭐ {review?.rating}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm">{review?.comment}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </Modal>
      )}
    </section>
  );
};

export default Description;
