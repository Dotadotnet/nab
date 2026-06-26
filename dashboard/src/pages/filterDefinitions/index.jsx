import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Popup from "@/components/ui/Popup";
import ControlPanel from "../ControlPanel";
import AddButton from "@/components/shared/button/AddButton";
import DeleteModal from "@/components/shared/DeleteModal";
import DynamicOptionsInput from "@/components/shared/DynamicOptionsInput";
import Pagination, { usePaginationState } from "@/components/shared/Pagination";
import SearchBox, { useDebouncedValue } from "@/components/shared/SearchBox";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pencil from "@/components/icons/Pencil";
import {
  filterTypes,
  getTypeLabel,
  numericTypes,
  optionTypes,
} from "../categoryFilters/filterOptions";
import {
  useCreateFilterDefinitionMutation,
  useDeleteFilterDefinitionMutation,
  useGetFilterDefinitionsQuery,
  useUpdateFilterDefinitionMutation,
} from "../../services/category/filterDefinitionApi";

const initialForm = {
  key: "",
  label: "",
  type: "select",
  options: [],
  min: "",
  max: "",
  unit: "",
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

function ColorOptionPreview({ option }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span
        className="h-3 w-3 shrink-0 rounded-full border border-zinc-700"
        style={{ backgroundColor: option.value }}
      />
      <span>{option.label}</span>
    </span>
  );
}

function StatusDot({ active }) {
  return (
    <span
      className={`h-3 w-3 shrink-0 rounded-full ${
        active ? "bg-green-500" : "bg-rose-500"
      }`}
    />
  );
}

function FilterValuePreview({ item }) {
  if (item.options?.length) {
    if (item.type === "color") {
      return item.options
        .map((option) => <ColorOptionPreview key={option.value} option={option} />)
        .reduce((items, option, index) => (index ? [...items, "، ", option] : [option]), []);
    }

    return item.options.map((option) => option.label).join("، ");
  }

  if (item.min !== null || item.max !== null) {
    return `${item.min ?? "-"} تا ${item.max ?? "-"} ${item.unit || ""}`;
  }

  return "-";
}

function FilterDefinitionForm({ form, onChange, onOptionsChange }) {
  const showOptions = optionTypes.includes(form.type);
  const showNumbers = numericTypes.includes(form.type);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-zinc-300">عنوان نمایشی</span>
          <input
            className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white"
            name="label"
            onChange={onChange}
            placeholder="مثلا گارانتی"
            value={form.label}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-zinc-300">کلید فنی</span>
          <input
            className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-left text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white"
            dir="ltr"
            name="key"
            onChange={onChange}
            placeholder="warranty"
            value={form.key}
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm text-zinc-300">نوع فیلتر</span>
        <select
          className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white"
          name="type"
          onChange={onChange}
          value={form.type}
        >
          {filterTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </label>

      {showOptions ? (
        <DynamicOptionsInput
          helperText={
            form.type === "color"
              ? "برای رنگ‌ها مقدار فنی را به شکل کد رنگ مثل #000000 وارد کنید."
              : "برای گزینه‌هایی مثل گارانتی، هر ردیف یک عنوان و یک مقدار فنی دارد."
          }
          isColor={form.type === "color"}
          label={form.type === "color" ? "رنگ‌های پیش‌فرض" : "گزینه‌های پیش‌فرض"}
          onChange={onOptionsChange}
          value={form.options}
        />
      ) : null}

      {showNumbers ? (
        <div className="grid gap-4 md:grid-cols-3">
          <label className="space-y-2">
            <span className="text-sm text-zinc-300">حداقل</span>
            <input className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white" name="min" onChange={onChange} type="number" value={form.min} />
          </label>
          <label className="space-y-2">
            <span className="text-sm text-zinc-300">حداکثر</span>
            <input className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-white outline-none transition focus:border-white" name="max" onChange={onChange} type="number" value={form.max} />
          </label>
          <label className="space-y-2">
            <span className="text-sm text-zinc-300">واحد</span>
            <input className="w-full rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white" name="unit" onChange={onChange} placeholder="GB، تومان، اینچ" value={form.unit} />
          </label>
        </div>
      ) : null}

      <label className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-black px-3 py-3 text-sm text-zinc-300">
        <input checked={form.isActive} className="h-4 w-4 accent-white" name="isActive" onChange={onChange} type="checkbox" />
        فعال
      </label>
    </div>
  );
}

function FilterDefinitions() {
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(initialForm);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [popupMode, setPopupMode] = useState(null);
  const debouncedSearch = useDebouncedValue(search);
  const pagination = usePaginationState(5, debouncedSearch);

  const { data, isLoading } = useGetFilterDefinitionsQuery({
    page: pagination.currentPage,
    limit: pagination.pageSize,
    search: debouncedSearch,
  });
  const [createFilter, createState] = useCreateFilterDefinitionMutation();
  const [updateFilter, updateState] = useUpdateFilterDefinitionMutation();
  const [deleteFilter, deleteState] = useDeleteFilterDefinitionMutation();

  const filters = data?.data || [];
  const meta = data?.pagination;
  const isSaving = createState.isLoading || updateState.isLoading;

  useEffect(() => {
    if (popupMode === "create") {
      setForm(initialForm);
      setSelectedFilter(null);
    }
  }, [popupMode]);

  const closePopup = () => {
    setPopupMode(null);
    setSelectedFilter(null);
    setForm(initialForm);
  };

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleOptionsChange = (options) => {
    setForm((prev) => ({ ...prev, options }));
  };

  const openEdit = (filter) => {
    setSelectedFilter(filter);
    setForm({
      key: filter.key || "",
      label: filter.label || "",
      type: filter.type || "select",
      options: filter.options || [],
      min: filter.min ?? "",
      max: filter.max ?? "",
      unit: filter.unit || "",
      isActive: filter.status !== "inactive",
    });
    setPopupMode("edit");
  };

  const buildBody = () => ({
    key: form.key,
    label: form.label,
    type: form.type,
    options: optionTypes.includes(form.type) ? cleanOptions(form.options) : [],
    min: numericTypes.includes(form.type) ? form.min : null,
    max: numericTypes.includes(form.type) ? form.max : null,
    unit: numericTypes.includes(form.type) ? form.unit : "",
    isActive: form.isActive,
  });

  const handleSubmit = async () => {
    try {
      const response =
        popupMode === "edit"
          ? await updateFilter({ id: selectedFilter._id, body: buildBody() }).unwrap()
          : await createFilter(buildBody()).unwrap();

      toast.success(response.description || "تعریف فیلتر ذخیره شد");
      closePopup();
    } catch (error) {
      toast.error(error?.data?.description || "ذخیره تعریف فیلتر انجام نشد");
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      const response = await deleteFilter(id).unwrap();
      toast.success(response.description || "تعریف فیلتر حذف شد");
    } catch (error) {
      toast.error(error?.data?.description || "حذف تعریف فیلتر انجام نشد");
    }
  };

  return (
    <ControlPanel>
      <SearchBox
        onChange={setSearch}
        placeholder="جستجوی عنوان، کلید یا گزینه..."
        value={search}
      />
      <div className="mt-4">
        <AddButton onClick={() => setPopupMode("create")} />
      </div>

      <div className="mt-8 grid w-full grid-cols-12 px-4 text-slate-400">
        <div className="col-span-8 text-sm lg:col-span-3">
          <span className="hidden lg:flex">عنوان</span>
          <span className="flex lg:hidden">عنوان و کلید</span>
        </div>
        <div className="hidden text-sm lg:col-span-2 lg:flex">کلید</div>
        <div className="hidden text-sm lg:col-span-2 lg:flex">نوع</div>
        <div className="hidden text-sm lg:col-span-4 lg:flex">گزینه‌ها / بازه</div>
        <div className="col-span-4 text-center text-sm lg:col-span-1">عملیات</div>
      </div>

      {isLoading || !filters.length ? (
        <SkeletonItem repeat={5} />
      ) : (
        filters.map((item) => (
          <div
            key={item._id}
            className="mt-4 grid grid-cols-12 gap-2 rounded-xl border border-gray-200 bg-white px-2 p-1 text-slate-700 transition-all hover:border-slate-100 hover:bg-green-100 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-gray-800"
          >
            <div className="col-span-8 flex items-center gap-3 lg:col-span-3">
              <StatusDot active={item.status !== "inactive"} />
              <article className="flex min-w-0 flex-col gap-y-2 py-2 text-right">
                <span className="line-clamp-1 text-base">{item.label}</span>
                <span className="line-clamp-1 text-xs text-slate-500 dark:text-slate-300 lg:hidden" dir="ltr">
                  {item.key}
                </span>
              </article>
            </div>

            <div className="hidden items-center text-right lg:col-span-2 lg:flex">
              <span className="line-clamp-1 font-mono text-sm" dir="ltr">{item.key}</span>
            </div>

            <div className="hidden items-center text-right lg:col-span-2 lg:flex">
              <span className="line-clamp-1 text-sm">{getTypeLabel(item.type)}</span>
            </div>

            <div className="hidden items-center text-right lg:col-span-4 lg:flex">
              <span className="line-clamp-1 text-sm text-slate-600 dark:text-slate-300">
                <FilterValuePreview item={item} />
              </span>
            </div>

            <div className="col-span-4 flex items-center justify-center gap-2 lg:col-span-1">
              <button
                aria-label="ویرایش تعریف فیلتر"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-green-400 hover:text-green-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                onClick={() => openEdit(item)}
                type="button"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <DeleteModal
                ariaLabel="حذف تعریف فیلتر"
                isLoading={deleteState.isLoading}
                itemTitle={item.label}
                message="این تعریف فیلتر حذف شود؟"
                onDelete={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))
      )}

      <Pagination currentPage={pagination.currentPage} onPageChange={pagination.setCurrentPage} onPageSizeChange={pagination.setPageSize} pageSize={pagination.pageSize} totalItems={meta?.totalItems || filters.length} totalPages={meta?.totalPages} />

      <Popup
        isOpen={popupMode === "create" || popupMode === "edit"}
        onClose={closePopup}
        title={popupMode === "edit" ? "ویرایش تعریف فیلتر" : "افزودن تعریف فیلتر"}
        footer={
          <div className="flex items-center justify-end gap-3">
            <button className="rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white" onClick={closePopup} type="button">انصراف</button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50" disabled={isSaving} onClick={handleSubmit} type="button">
              {isSaving ? "در حال ذخیره..." : "ذخیره"}
            </button>
          </div>
        }
      >
        <FilterDefinitionForm form={form} onChange={handleChange} onOptionsChange={handleOptionsChange} />
      </Popup>
    </ControlPanel>
  );
}

export default FilterDefinitions;
