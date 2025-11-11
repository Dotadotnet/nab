"use client"
import React, { useMemo } from "react";
import { useGetMagazinesQuery } from "@/services/magazine/magazineApi";
import SkeletonText from "@/components/shared/skeletonLoading/SkeletonText";
import SkeletonImage from "@/components/shared/skeletonLoading/SkeletonImage";
import MagazineCard from "@/components/shared/card/MagazineCard";

const LastMagazine = () => {
  const { isLoading, data } = useGetMagazinesQuery();
  const magazines = useMemo(() => data?.data || [], [data]);
  return (
    <>
      <section className="grid grid-cols-1 gap-4 ">
        {isLoading || magazines.length === 0
          ? Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center rtl min-h-[120px] lg:min-h-[200px]  "
              >
                <div className="relative flex flex-row space-x-3 h-full space-x-reverse rounded-primary shadow-lg p-3 w-full md:min-w-[600px] max-w-[650px] mx-auto border border-white  bg-white/70 dark:bg-slate-800/70 dark:border-slate-600">
                  <div className="w-1/3 grid place-items-center ">
                    <SkeletonImage borderRadius={"rounded-lg"} />
                  </div>
                  <div className="w-2/3 flex flex-col space-y-2  lg:p-3">
                    <SkeletonText lines={7} />
                  </div>
                </div>
              </div>
            ))
          : magazines.map((magazine, index) => <MagazineCard key={index} magazine={magazine} />)}
      </section>
    </>
  );
};

export default LastMagazine;
