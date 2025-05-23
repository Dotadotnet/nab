"use client";
import React ,{useEffect } from "react";
import {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation
} from "@/services/favorite/favoriteApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { HeartEmpty, HeartFull } from "@/components/icons/Heart";
import Spinner from "../../Spinner";

export default function Favorite({product}) {
  const user = useSelector((state) => state?.auth?.user);

  const favorite = user?.favorites?.find(
    (fav) => fav?.product?._id === product?._id
  );

  return (
    <div>
      {" "}
      {favorite ? (
        <RemoveFromFavorite favorite={favorite} />
      ) : (
        <AddToFavorite product={product} />
      )}
    </div>
  );
}


function AddToFavorite({ product }) {
  const user = useSelector((state) => state?.auth?.user);
  const [addToFavorite, { isLoading, data, error }] =
    useAddToFavoriteMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("اضافه کردن به علاقه‌مندی...", { id: "addToFavorite" });
    }

    if (data) {
      toast.success(data?.description, { id: "addToFavorite" });
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "addToFavorite" });
    }
  }, [isLoading, data, error]);

  return (
    <button
      className="absolute top-4  right-5 z-10"
      aria-label="افزودن به علاقه مندی "
      onClick={(e) => {
        e.stopPropagation(); 
        addToFavorite({ product: product?._id });
      }}
    >
      {isLoading ? <Spinner /> : <HeartEmpty className="w-8 h-8 cursor-pointer text-black" />}
    </button>
  );
}

function RemoveFromFavorite({ favorite }) {
  const user = useSelector((state) => state?.auth?.user);
  const [removeFromFavorite, { isLoading, data, error }] =
    useRemoveFromFavoriteMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("حذف از علاقه‌مندی...", { id: "addToFavorite" });
    }

    if (data) {
      toast.success(data?.description, { id: "addToFavorite" });
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "addToFavorite" });
    }
  }, [isLoading, data, error]);

  return (
    <button
      className="absolute top-4 right-5 z-10 hover:scale-90"
      aria-label="حذف از علاقه مندی"
      onClick={(e) => {
        e.stopPropagation();
        removeFromFavorite({ id: favorite?._id });
      }}
    >
      {isLoading ? <Spinner /> : <HeartFull className="w-8 h-8" />}
    </button>
  );
}

