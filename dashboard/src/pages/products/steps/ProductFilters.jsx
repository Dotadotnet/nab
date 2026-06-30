import React, { useEffect, useMemo } from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import Dropdown from "@/components/shared/dropDown/Dropdown";
import MultiSelect from "@/components/shared/dropDown/MultiSelect";
import { useGetCategoryFiltersQuery } from "@/services/category/categoryFilterApi";

const ProductFilters = ({
  errors,
  nextStep,
  prevStep,
  register,
  setValue,
  watch,
}) => {
  const category = watch("category");
  const filterValues = watch("filterValues") || {};
  const { data, isFetching } = useGetCategoryFiltersQuery(
    { category, limit: 100 },
    { skip: !category }
  );

  const filters = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    setValue("filterValues", {});
  }, [category, setValue]);

  const getFilterLabel = (filter) => filter.label || filter.title || filter.name || filter.key;
  const getOptionLabel = (option) => option.label || option.title || option.name || option.value;

  const getOptionItems = (filter) =>
    (filter.options || []).map((option) => ({
      id: option.value,
      value: option.value,
      title: getOptionLabel(option),
      label: getOptionLabel(option),
      icon:
        filter.type === "color"
          ? `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:${option.value};border:1px solid rgba(0,0,0,.22)"></span>`
          : "",
    }));

  const getSelectedItems = (filter, value) => {
    const values = Array.isArray(value) ? value : value ? [value] : [];
    return getOptionItems(filter).filter((item) => values.includes(item.id));
  };

  const renderFilterInput = (filter) => {
    const name = `filterValues.${filter.key}`;
    const currentValue = filterValues?.[filter.key];
    const filterLabel = getFilterLabel(filter);

    if (filter.type === "boolean") {
      return (
        <label className="flex items-center gap-2 rounded border border-gray-200 p-2 text-sm dark:border-gray-700">
          <input type="checkbox" {...register(name)} />
          <span>{filterLabel}</span>
        </label>
      );
    }

    if (filter.type === "multi_select") {
      return (
        <MultiSelect
          items={getOptionItems(filter)}
          selectedItems={getSelectedItems(filter, currentValue)}
          handleSelect={(items) =>
            setValue(
              name,
              items.map((item) => item.id),
              { shouldDirty: true, shouldValidate: true }
            )
          }
          placeholder="انتخاب چند مورد"
          className="w-full"
        />
      );
    }

    if (filter.type === "select" || filter.type === "color") {
      return (
        <Dropdown
          items={getOptionItems(filter)}
          value={currentValue || ""}
          handleSelect={(item) =>
            setValue(name, item.value, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
          placeholder="انتخاب کنید"
          className="h-11 w-full"
        />
      );
    }

    if (filter.type === "number" || filter.type === "range") {
      return (
        <input
          type="number"
          min={filter.min ?? undefined}
          max={filter.max ?? undefined}
          step="any"
          className="w-full rounded border p-2"
          placeholder={filter.unit ? `${filterLabel} (${filter.unit})` : filterLabel}
          {...register(name, { valueAsNumber: true })}
        />
      );
    }

    return (
      <input
        type="text"
        className="w-full rounded border p-2"
        placeholder={filterLabel}
        {...register(name)}
      />
    );
  };

  return (
    <>
      <div className="flex flex-col gap-y-4 rounded border p-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          فیلترهای محصول
        </h3>

        {!category ? (
          <p className="rounded border border-dashed border-gray-300 p-4 text-sm text-gray-500">
            ابتدا دسته‌بندی محصول را انتخاب کنید.
          </p>
        ) : isFetching ? (
          <p className="text-sm text-gray-500">در حال دریافت فیلترها ...</p>
        ) : filters.length ? (
          <div className="flex flex-col gap-y-4">
            {filters.map((filter) => (
              <div key={filter._id} className="flex flex-col gap-y-2">
                <label className="text-sm text-gray-700 dark:text-gray-200">
                  {getFilterLabel(filter)}
                  {filter.unit ? ` (${filter.unit})` : ""}
                </label>
                {renderFilterInput(filter)}
                {errors?.filterValues?.[filter.key] && (
                  <span className="text-sm text-red-500">
                    {errors.filterValues[filter.key].message}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded border border-dashed border-gray-300 p-4 text-sm text-gray-500">
            برای این دسته‌بندی فیلتری تعریف نشده است.
          </p>
        )}

        {Object.keys(filterValues).length > 0 && (
          <button
            className="w-fit rounded border border-gray-300 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            type="button"
            onClick={() => setValue("filterValues", {})}
          >
            پاک کردن فیلترها
          </button>
        )}
      </div>

      <div className="flex justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default ProductFilters;
