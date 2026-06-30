import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ControlPanel from "../ControlPanel";
import DynamicOptionsInput from "@/components/shared/DynamicOptionsInput";
import Button from "@/components/shared/button/Button";
import Modal from "@/components/shared/modal/Modal";
import {
  useCreateCategoryFilterMutation,
  useGetCategoryFilterQuery,
  useUpdateCategoryFilterMutation,
} from "../../services/category/categoryFilterApi";
import { useGetCategoryTreeQuery } from "../../services/category/categoryApi";
import { useGetFilterDefinitionsQuery } from "../../services/category/filterDefinitionApi";
import renderTreeOptions from "../categories/components/renderTreeOptions";
import { getTypeLabel, numericTypes, optionTypes } from "./filterOptions";

const initialForm = {
  category: "",
  filter: "",
  options: [],
  min: "",
  max: "",
  unit: "",
  isRequired: false,
  isActive: true,
};

function cleanOptions(options = []) {
  return options
    .map((option) => ({
      label: String(option.label || "").trim(),
      value: String(option.value || option.label || "").trim(),
    }))
    .filter((option) => option.label && option.value);
}

function CategoryOptionsEditor({ definition, onChange, value }) {
  const definitionOptions = definition?.options || [];
  const isColor = definition?.type === "color";

  return (
    <div className="space-y-3">
      <DynamicOptionsInput
        helperText={
          isColor
            ? "رنگ‌هایی را وارد کنید که برای این دسته‌بندی قابل انتخاب هستند."
            : "گزینه‌هایی را وارد کنید که این دسته‌بندی برای این فیلتر دارد."
        }
        isColor={isColor}
        label={isColor ? "رنگ‌های این دسته‌بندی" : "آیتم‌های این فیلتر در این دسته‌بندی"}
        onChange={onChange}
        value={value}
      />

      {definitionOptions.length ? (
        <div className="flex justify-end">
          <button
            className="rounded border px-3 py-2 text-xs transition hover:bg-green-50 dark:hover:bg-slate-700"
            onClick={() => onChange(definitionOptions)}
            type="button"
          >
            استفاده از گزینه‌های تعریف اصلی
          </button>
        </div>
      ) : null}
    </div>
  );
}

function CategoryFilterFields({
  form,
  handleChange,
  handleOptionsChange,
  isLoadingFilter,
  selectedDefinition,
  showNumbers,
  showOptions,
  tree,
  definitions,
}) {
  if (isLoadingFilter) {
    return <div className="w-full p-4 border rounded text-sm">در حال دریافت...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-y-4 p-4 border rounded">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-y-1">
          <span className="text-sm">دسته‌بندی*</span>
          <select name="category" onChange={handleChange} required value={form.category}>
            <option value="">انتخاب دسته‌بندی</option>
            {renderTreeOptions(tree)}
          </select>
        </label>

        <label className="flex flex-col gap-y-1">
          <span className="text-sm">فیلتر آماده*</span>
          <select name="filter" onChange={handleChange} required value={form.filter}>
            <option value="">انتخاب فیلتر</option>
            {definitions.map((filter) => (
              <option key={filter._id} value={filter._id}>
                {filter.label} - {getTypeLabel(filter.type)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDefinition ? (
        <div className="rounded border bg-gray-50 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-200">
          <span className="font-medium">{selectedDefinition.label}</span>
          <span className="mx-2 text-slate-400">/</span>
          <span dir="ltr">{selectedDefinition.key}</span>
          <span className="mx-2 text-slate-400">/</span>
          <span>{getTypeLabel(selectedDefinition.type)}</span>
        </div>
      ) : null}

      {showOptions ? (
        <CategoryOptionsEditor
          definition={selectedDefinition}
          onChange={handleOptionsChange}
          value={form.options}
        />
      ) : null}

      {showNumbers ? (
        <div className="space-y-3">
          <div className="rounded border bg-gray-50 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-200">
            بازه تعریف اصلی:
            <span className="mx-2 font-medium">
              {selectedDefinition.min ?? "-"} تا {selectedDefinition.max ?? "-"}{" "}
              {selectedDefinition.unit || ""}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="flex flex-col gap-y-1">
              <span className="text-sm">حداقل این دسته‌بندی</span>
              <input name="min" onChange={handleChange} placeholder={selectedDefinition.min ?? ""} type="number" value={form.min} />
            </label>
            <label className="flex flex-col gap-y-1">
              <span className="text-sm">حداکثر این دسته‌بندی</span>
              <input name="max" onChange={handleChange} placeholder={selectedDefinition.max ?? ""} type="number" value={form.max} />
            </label>
            <label className="flex flex-col gap-y-1">
              <span className="text-sm">واحد این دسته‌بندی</span>
              <input name="unit" onChange={handleChange} placeholder={selectedDefinition.unit || "GB، تومان، اینچ"} value={form.unit} />
            </label>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex items-center gap-3 text-sm">
          <input checked={form.isRequired} className="h-4 w-4 accent-green-500" name="isRequired" onChange={handleChange} type="checkbox" />
          اجباری
        </label>

        <label className="flex items-center gap-3 text-sm">
          <input checked={form.isActive} className="h-4 w-4 accent-green-500" name="isActive" onChange={handleChange} type="checkbox" />
          فعال
        </label>
      </div>
    </div>
  );
}

function CategoryFilterForm({
  editId,
  isOpen,
  mode = "create",
  onClose,
  onSuccess,
}) {
  const navigate = useNavigate();
  const params = useParams();
  const id = editId || params.id;
  const isEdit = mode === "edit";
  const isModalMode = typeof isOpen === "boolean";
  const [form, setForm] = useState(initialForm);

  const { data: treeData } = useGetCategoryTreeQuery();
  const { data: definitionsData } = useGetFilterDefinitionsQuery({ page: 1, limit: 100 });
  const { data: filterData, isLoading: isLoadingFilter } = useGetCategoryFilterQuery(id, {
    skip: !isEdit || !id,
  });
  const [createFilter, createState] = useCreateCategoryFilterMutation();
  const [updateFilter, updateState] = useUpdateCategoryFilterMutation();

  const tree = treeData?.data || [];
  const definitions = definitionsData?.data || [];
  const selectedDefinition =
    definitions.find((item) => item._id === form.filter) || filterData?.data?.filter;
  const isSaving = createState.isLoading || updateState.isLoading;
  const showOptions = optionTypes.includes(selectedDefinition?.type);
  const showNumbers = numericTypes.includes(selectedDefinition?.type);

  useEffect(() => {
    if (!isEdit) {
      setForm(initialForm);
      return;
    }

    const filter = filterData?.data;
    if (!filter) return;

    setForm({
      category: filter.category?._id || filter.category || "",
      filter: filter.filter?._id || filter.filter || "",
      options: filter.options?.length ? filter.options : [],
      min: filter.min ?? "",
      max: filter.max ?? "",
      unit: filter.unit || "",
      isRequired: Boolean(filter.isRequired),
      isActive: filter.status !== "inactive",
    });
  }, [filterData, isEdit]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "filter" ? { options: [], min: "", max: "", unit: "" } : {}),
    }));
  };

  const handleOptionsChange = (options) => {
    setForm((prev) => ({ ...prev, options }));
  };

  const close = () => {
    if (isModalMode) {
      onClose?.();
      return;
    }
    navigate("/category-filters");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.category || !form.filter) {
      toast.error("دسته‌بندی و فیلتر را انتخاب کنید");
      return;
    }

    const options = cleanOptions(form.options);
    if (showOptions && !options.length) {
      toast.error("آیتم‌های این فیلتر را برای دسته‌بندی وارد کنید");
      return;
    }

    const body = {
      category: form.category,
      filter: form.filter,
      ...(showOptions ? { options } : {}),
      ...(showNumbers && form.min !== "" ? { min: form.min } : {}),
      ...(showNumbers && form.max !== "" ? { max: form.max } : {}),
      ...(showNumbers && form.unit !== "" ? { unit: form.unit } : {}),
      isRequired: form.isRequired,
      isActive: form.isActive,
    };

    try {
      const response = isEdit
        ? await updateFilter({ id, body }).unwrap()
        : await createFilter(body).unwrap();

      toast.success(response.description || "فیلتر دسته‌بندی ذخیره شد");
      onSuccess?.();
      close();
    } catch (error) {
      toast.error(error?.data?.description || error?.message || "ذخیره فیلتر دسته‌بندی انجام نشد");
    }
  };

  const formContent = (
    <form className="text-sm w-full h-full flex flex-col gap-y-4 mb-3 p-4 overflow-y-auto" onSubmit={handleSubmit}>
      <h2 className="text-base font-bold">
        {isEdit ? "ویرایش فیلتر دسته‌بندی" : "افزودن فیلتر به دسته‌بندی"}
      </h2>
      <CategoryFilterFields
        definitions={definitions}
        form={form}
        handleChange={handleChange}
        handleOptionsChange={handleOptionsChange}
        isLoadingFilter={isLoadingFilter}
        selectedDefinition={selectedDefinition}
        showNumbers={showNumbers}
        showOptions={showOptions}
        tree={tree}
      />
      <div className="flex gap-2">
        <Button type="submit" className="py-2 mt-4 mb-4 bg-black flex-1" isLoading={isSaving}>
          ذخیره
        </Button>
        <button type="button" className="py-2 px-4 mt-4 mb-4 rounded-secondary border" onClick={close}>
          انصراف
        </button>
      </div>
    </form>
  );

  if (isModalMode) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={close}
        className="lg:w-1/2 md:w-3/5 w-full z-50 p-4 rounded-md overflow-y-hidden"
      >
        {formContent}
      </Modal>
    );
  }

  return (
    <ControlPanel>
      <section className="mx-auto max-w-3xl">{formContent}</section>
    </ControlPanel>
  );
}

export default CategoryFilterForm;
