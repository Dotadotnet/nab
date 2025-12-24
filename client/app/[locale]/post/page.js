"use client";

import MagazineHeader from "@/components/shared/details/magazine/MagazineHeader";
import MagazineContent from "@/components/shared/details/magazine/MagazineContent";
import MagazineMedia from "@/components/shared/details/magazine/MagazineMedia";
import MagazineComments from "@/components/shared/details/magazine/MagazineComments";
import Container from "@/components/shared/Container";
import Main from "@/components/shared/layouts/Main";
import { useGetMagazineQuery } from "@/services/magazine/magazineApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import HighlightText from "@/components/shared/highlightText/HighlightText";

const Detail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("magazine_id");
  const {
    data: magazineData,
    error: magazineError,
    isLoading: magazineLoading
  } = useGetMagazineQuery(id);
  const magazine = useMemo(() => magazineData?.data || {}, [magazineData]);
  useEffect(() => {
    if (magazineError) {
      toast.error(magazineError?.data?.description, { id: "magazineData" });
    }
  }, [magazineError]);
  return (
    <Main>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5 md:mt-28  ">
          <div className="md:col-span-2 flex flex-col gap-y-80 col-span-1 order-2  md:order-1">
            <div>
              <HighlightText title={"مکان تبلیغات شما"} size="2" />
            </div>
            <div>
            <HighlightText title={"مکان تبلیغات شما"} size="2" />
            </div>
          </div>
          <div className="relative md:col-span-7 order-1 md:order-2 bg-white -24 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg">
            <MagazineHeader
              isLoading={magazineLoading}
              creator={magazine?.creator}
              publishDate={magazine?.publishDate}
            />
            <MagazineMedia isLoading={magazineLoading} galleryPreview={magazine?.gallery} />
            <MagazineContent
              content={magazine?.content}
              isLoading={magazineLoading}
              title={magazine?.title}
              selectedTags={magazine?.Tags}
            />
            <MagazineComments comments={magazine?.comments} />
          </div>
          <did className="md:col-span-3 order-3 md:order-3 ">
          <div>
              <HighlightText title={"آخرین اخبار  نقل و شیرینی"} size="2" />
            </div>
          </did>
        </div>
      </Container>
    </Main>
  );
};

export default Detail;
