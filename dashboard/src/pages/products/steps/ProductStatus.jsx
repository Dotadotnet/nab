import React, { useMemo, useEffect } from "react";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import { toast } from "react-hot-toast";
import { useGetTagsQuery } from "@/services/tag/tagApi";
import Tag from "@/components/icons/Tag";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";
import Plus from "@/components/icons/Plus";
import { Link } from "react-router-dom";

function getTagTranslation(tag) {
  const translation =
    tag?.translations?.find((item) => item?.translation && item.language === "fa")
      ?.translation ||
    tag?.translations?.find((item) => item?.translation)?.translation ||
    {};

  return translation.fields || translation;
}

const ProductStatus = ({
  register,
  selectedOptions,
  setSelectedOptions
}) => {
  const {
    isLoading: fetchingTags,
    data: fetchTagsData,
    error: fetchTagsError
  } = useGetTagsQuery({
    page: 1,
    limit: 1000,
    status: "all",
    search: ""
  });

  const tags = useMemo(
    () =>
      fetchTagsData?.data?.map((tag) => {
        const translation = getTagTranslation(tag);
        const title = translation?.title || tag.title || "-";

        return {
          id: tag._id,
          value: title,
          label: title,
          description: translation?.description || tag.description || ""
        };
      }) || [],
    [fetchTagsData]
  );

  useEffect(() => {
    if (fetchingTags) {
      toast.loading("در حال دریافت تگ‌ها ...", { id: "fetchTags" });
    } else if (fetchTagsData) {
      toast.success(fetchTagsData?.description, { id: "fetchTags" });
    } else if (fetchTagsError) {
      toast.error(fetchTagsError?.data?.description, { id: "fetchTags" });
    }
  }, [fetchingTags, fetchTagsData, fetchTagsError]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex items-center justify-center gap-x-2 p-4 border rounded">
        <label htmlFor="tag" className="w-full flex flex-col gap-y-1">
          <span className="text-sm">برچسب*</span>
          <MultiSelect
            items={tags}
            selectedItems={selectedOptions}
            handleSelect={setSelectedOptions}
            className="w-full"
            name="tags"
            icon={<Tag size={24} />}
          />
        </label>
        <div className="mt-7 flex justify-start">
          <Link
            to="/tags/add"
            className="p-4 bg-green-400 dark:bg-blue-600 text-white rounded hover:bg-green-600 dark:hover:bg-blue-400 transition-colors"
            aria-label="افزودن تگ جدید"
            title="افزودن تگ جدید"
          >
            <Plus />
          </Link>
        </div>
      </div>
      <StatusSwitch
        label="آیا این محصول ویژه است"
        id="isFeatured"
        register={register}
      />
    </div>
  );
};

export default ProductStatus;
