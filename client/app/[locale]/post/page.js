"use client";

import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import { useGetMagQuery } from "@/services/mag/magApi";
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
  } = useGetMagQuery(id);
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
          <div className="relative md:col-span-7 order-1 md:order-2 bg-white p-24 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg">
            {magazineLoading ? (
              <div className="text-center py-10">
                <p>در حال بارگذاری...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h1 className="text-2xl font-bold">{magazine?.title || 'عنوان مقاله'}</h1>
                  <div className="text-sm text-gray-500 mt-2">
                    نویسنده: {magazine?.creator || 'ناشناس'} | تاریخ: {magazine?.publishDate || 'تاریخ نامشخص'}
                  </div>
                </div>
                
                {magazine?.gallery && magazine.gallery.length > 0 && (
                  <div className="mt-4">
                    <img 
                      src={magazine.gallery[0]} 
                      alt="تصویر مقاله" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <div className="prose max-w-none">
                  <div className="text-gray-700 dark:text-gray-300 text-justify" 
                    dangerouslySetInnerHTML={{ __html: magazine?.content || 'محتوای مقاله در دسترس نیست' }}>
                  </div>
                </div>
                
                {magazine?.Tags && magazine.Tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {magazine.Tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {magazine?.comments && magazine.comments.length > 0 && (
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-lg font-semibold mb-4">دیدگاه‌ها</h3>
                    <div className="space-y-4">
                      {magazine.comments.map((comment, index) => (
                        <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                          <p className="text-gray-700 dark:text-gray-300">{comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="md:col-span-3 order-3 md:order-3 ">
            <div>
              <HighlightText title={"آخرین اخبار  نقل و شیرینی"} size="2" />
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Detail;
