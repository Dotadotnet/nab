import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ControlPanel from "../ControlPanel";
import AddButton from "@/components/shared/button/AddButton";
import DeleteModal from "@/components/shared/DeleteModal";
import Pagination, { usePaginationState } from "@/components/shared/Pagination";
import SearchBox, { useDebouncedValue } from "@/components/shared/SearchBox";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pencil from "@/components/icons/Pencil";
import {
  useDeleteCategoryFilterMutation,
  useGetCategoryFiltersQuery,
  useReorderCategoryFiltersMutation,
} from "../../services/category/categoryFilterApi";
import { useGetCategoryTreeQuery } from "../../services/category/categoryApi";
import renderTreeOptions from "../categories/components/renderTreeOptions";
import { getTypeLabel } from "./filterOptions";

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

function CategoryFilters() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [orderedFilters, setOrderedFilters] = useState([]);
  const [draggedId, setDraggedId] = useState(null);
  const debouncedSearch = useDebouncedValue(search);
  const filtersPagination = usePaginationState(5, `${selectedCategory}-${debouncedSearch}`);

  const { data: filtersData, isLoading } = useGetCategoryFiltersQuery({
    category: selectedCategory,
    limit: filtersPagination.pageSize,
    page: filtersPagination.currentPage,
    search: debouncedSearch,
  });
  const { data: treeData } = useGetCategoryTreeQuery();
  const [deleteFilter, { isLoading: isDeleting }] = useDeleteCategoryFilterMutation();
  const [reorderFilters, { isLoading: isReordering }] = useReorderCategoryFiltersMutation();

  const filters = filtersData?.data || [];
  const filtersMeta = filtersData?.pagination;
  const tree = treeData?.data || [];

  useEffect(() => {
    setOrderedFilters(filters);
  }, [filters]);

  const handleDelete = async (id) => {
    try {
      const response = await deleteFilter(id).unwrap();
      toast.success(response.description || "فیلتر حذف شد");
    } catch (error) {
      toast.error(error?.data?.description || "حذف فیلتر انجام نشد");
    }
  };

  const persistOrder = async (items) => {
    try {
      await reorderFilters({
        orderedIds: items.map((item) => item._id),
        startSortOrder: (filtersPagination.currentPage - 1) * filtersPagination.pageSize,
      }).unwrap();
      toast.success("ترتیب فیلترها ذخیره شد");
    } catch (error) {
      toast.error(error?.data?.description || "ذخیره ترتیب انجام نشد");
      setOrderedFilters(filters);
    }
  };

  const handleDrop = (targetId) => {
    if (!draggedId || draggedId === targetId) return;

    const fromIndex = orderedFilters.findIndex((item) => item._id === draggedId);
    const toIndex = orderedFilters.findIndex((item) => item._id === targetId);
    if (fromIndex < 0 || toIndex < 0) return;

    const nextItems = [...orderedFilters];
    const [movedItem] = nextItems.splice(fromIndex, 1);
    nextItems.splice(toIndex, 0, movedItem);

    setOrderedFilters(nextItems);
    setDraggedId(null);
    persistOrder(nextItems);
  };

  return (
    <ControlPanel>
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <SearchBox
          onChange={setSearch}
          placeholder="جستجوی عنوان، کلید یا گزینه..."
          value={search}
        />
        <select
          className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-green-400 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 md:w-72"
          onChange={(event) => setSelectedCategory(event.target.value)}
          value={selectedCategory}
        >
          <option value="" className="text-left">همه دسته‌بندی‌ها</option>
          {renderTreeOptions(tree)}
        </select>
      </div>

      <div className="mt-4">
        <AddButton link="/category-filters/add" />
      </div>

      <div className="mt-8 grid w-full grid-cols-12 px-4 text-slate-400">
        <div className="col-span-7 text-sm lg:col-span-3">
          <span className="hidden lg:flex">عنوان</span>
          <span className="flex lg:hidden">عنوان و دسته‌بندی</span>
        </div>
        <div className="hidden text-sm lg:col-span-2 lg:flex">کلید</div>
        <div className="hidden text-sm lg:col-span-2 lg:flex">دسته‌بندی</div>
        <div className="hidden text-sm lg:col-span-1 lg:flex">نوع</div>
        <div className="hidden text-sm lg:col-span-3 lg:flex">گزینه‌ها / بازه</div>
        <div className="col-span-5 text-center text-sm lg:col-span-1">عملیات</div>
      </div>

      {isLoading || !orderedFilters.length ? (
        <SkeletonItem repeat={5} />
      ) : (
        orderedFilters.map((item) => (
          <div
            draggable={!isReordering}
            key={item._id}
            className={`mt-4 grid grid-cols-12 gap-2 rounded-xl border border-gray-200 bg-white px-2 p-1 text-slate-700 transition-all hover:border-slate-100 hover:bg-green-100 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-gray-800 ${
              draggedId === item._id ? "opacity-60 ring-2 ring-green-400 dark:ring-blue-400" : ""
            }`}
            onDragEnd={() => setDraggedId(null)}
            onDragOver={(event) => event.preventDefault()}
            onDragStart={() => setDraggedId(item._id)}
            onDrop={() => handleDrop(item._id)}
          >
            <div className="col-span-7 flex min-w-0 items-center gap-3 lg:col-span-3">
              <button
                aria-label="تغییر ترتیب"
                className="inline-flex h-8 w-8 shrink-0 cursor-grab items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-green-400 hover:text-green-600 active:cursor-grabbing dark:border-white/10 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                type="button"
              >
                ⋮⋮
              </button>
              <StatusDot active={item.status === "active"} />
              <article className="flex min-w-0 flex-col gap-y-2 py-2 text-right">
                <span className="line-clamp-1 text-base">{item.label}</span>
                <span className="line-clamp-1 text-xs text-slate-500 dark:text-slate-300 lg:hidden">
                  {item.category?.title || item.category?.name || "-"}
                </span>
                {item.isRequired ? (
                  <span className="text-xs text-orange-500 dark:text-orange-300">اجباری</span>
                ) : null}
              </article>
            </div>

            <div className="hidden items-center text-right lg:col-span-2 lg:flex">
              <span className="line-clamp-1 font-mono text-sm" dir="ltr">{item.key}</span>
            </div>

            <div className="hidden items-center text-right lg:col-span-2 lg:flex">
              <span className="line-clamp-1 text-sm">
                {item.category?.title || item.category?.name || "-"}
              </span>
            </div>

            <div className="hidden items-center text-right lg:col-span-1 lg:flex">
              <span className="line-clamp-1 text-sm">{getTypeLabel(item.type)}</span>
            </div>

            <div className="hidden items-center text-right lg:col-span-3 lg:flex">
              <span className="line-clamp-1 text-sm text-slate-600 dark:text-slate-300">
                <FilterValuePreview item={item} />
              </span>
            </div>

            <div className="col-span-5 flex items-center justify-center gap-2 lg:col-span-1">
              <Link
                aria-label="ویرایش فیلتر"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-green-400 hover:text-green-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
                to={`/category-filters/edit/${item._id}`}
              >
                <Pencil className="h-4 w-4" />
              </Link>
              <DeleteModal
                ariaLabel="حذف فیلتر"
                isLoading={isDeleting}
                itemTitle={item.label}
                message="این فیلتر حذف شود؟"
                onDelete={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))
      )}

      <Pagination
        currentPage={filtersPagination.currentPage}
        onPageChange={filtersPagination.setCurrentPage}
        onPageSizeChange={filtersPagination.setPageSize}
        pageSize={filtersPagination.pageSize}
        totalItems={filtersMeta?.totalItems || filters.length}
        totalPages={filtersMeta?.totalPages}
      />
    </ControlPanel>
  );
}

export default CategoryFilters;
