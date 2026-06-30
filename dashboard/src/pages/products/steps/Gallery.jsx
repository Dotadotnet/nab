import React, { useEffect, useRef, useState } from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import ImageCropModal from "@/components/shared/gallery/ImageCropModal";
import CloudUpload from "@/components/icons/CloudUpload";

const MAX_GALLERY_FILES = 10;

function EditIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 8 2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const GalleryStep = ({ errors, nextStep, prevStep, setGallery, register, setValue }) => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const inputRef = useRef(null);
  const dragIndexRef = useRef(null);
  const itemsRef = useRef([]);
  const galleryRegister = register("gallery", {
    validate: (value) => value?.length > 0 || "آپلود حداقل یک تصویر الزامی است",
  });

  const syncGallery = (nextItems) => {
    const files = nextItems.map((item) => item.file);
    itemsRef.current = nextItems;
    setItems(nextItems);
    setGallery(files);
    setValue("gallery", files, { shouldDirty: true, shouldValidate: true });
  };

  useEffect(() => () => {
    itemsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
  }, []);

  const addFiles = (fileList) => {
    const files = Array.from(fileList || []).filter((file) => file.type.startsWith("image/"));
    if (!files.length) return;

    const availableSlots = MAX_GALLERY_FILES - items.length;
    const nextFiles = files.slice(0, availableSlots);
    const nextItems = [
      ...items,
      ...nextFiles.map((file) => ({
        id: `${file.name}-${file.lastModified}-${globalThis.crypto?.randomUUID?.() || Date.now()}`,
        file,
        url: URL.createObjectURL(file),
      })),
    ];

    syncGallery(nextItems);
  };

  const removeItem = (id) => {
    const target = items.find((item) => item.id === id);
    if (target) URL.revokeObjectURL(target.url);
    syncGallery(items.filter((item) => item.id !== id));
  };

  const replaceItem = (id, file, previewUrl) => {
    const nextItems = items.map((item) => {
      if (item.id !== id) return item;
      URL.revokeObjectURL(item.url);
      return { ...item, file, url: previewUrl };
    });
    syncGallery(nextItems);
    setEditingItem(null);
  };

  const moveItem = (from, to) => {
    if (from === to || from === null) return;
    const nextItems = [...items];
    const [moved] = nextItems.splice(from, 1);
    nextItems.splice(to, 0, moved);
    syncGallery(nextItems);
  };

  return (
    <>
      <input
        accept="image/*"
        className="hidden"
        multiple
        type="file"
        {...galleryRegister}
        ref={(element) => {
          galleryRegister.ref(element);
          inputRef.current = element;
        }}
        onChange={(event) => {
          galleryRegister.onChange(event);
          addFiles(event.target.files);
          event.target.value = "";
        }}
      />

      <div className="mb-4 flex justify-center">
        <button
          className="flex w-fit flex-row items-center gap-x-2 rounded-secondary border border-green-900 bg-green-100 px-4 py-2 text-sm text-green-900 transition hover:bg-green-200 dark:border-blue-900 dark:bg-blue-100 dark:text-blue-900"
          type="button"
          onClick={() => inputRef.current?.click()}
        >
          <CloudUpload className="h-5 w-5" />
          انتخاب تصاویر گالری
        </button>
      </div>

      <div className="mt-4 flex flex-row gap-x-2 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <div
            className="group relative h-[150px] w-[150px] flex-shrink-0 overflow-hidden rounded border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
            draggable
            key={item.id}
            onDragStart={() => {
              dragIndexRef.current = index;
            }}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => {
              moveItem(dragIndexRef.current, index);
              dragIndexRef.current = null;
            }}
          >
            <img alt="gallery" className="h-full w-full object-cover" draggable={false} src={item.url} />
            <div className="absolute inset-0 z-10 flex items-start justify-between gap-2 bg-black/0 p-2 opacity-0 transition-all group-hover:bg-black/45 group-hover:opacity-100">
              <button
                aria-label="ویرایش تصویر"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
                type="button"
                onDragStart={(event) => event.preventDefault()}
                onClick={() => setEditingItem(item)}
              >
                <EditIcon className="h-5 w-5" />
              </button>
              <button
                aria-label="حذف تصویر"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-500 text-white shadow transition hover:bg-red-600"
                type="button"
                onDragStart={(event) => event.preventDefault()}
                onClick={() => removeItem(item.id)}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <span className="absolute bottom-2 right-2 z-20 rounded bg-black/60 px-2 py-1 text-xs text-white">
              {index + 1}
            </span>
          </div>
        ))}

        <button
          className={`flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center rounded border-2 border-dashed transition ${
            items.length >= MAX_GALLERY_FILES
              ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-300 dark:border-gray-800 dark:bg-gray-900"
              : "border-gray-300 bg-gray-50 text-gray-500 hover:border-red-400 hover:text-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          }`}
          disabled={items.length >= MAX_GALLERY_FILES}
          type="button"
          onClick={() => inputRef.current?.click()}
        >
          <PlusIcon className="h-12 w-12" />
        </button>
      </div>

      {errors?.gallery && (
        <span className="mt-2 block text-sm text-red-500">{errors.gallery.message}</span>
      )}

      <ImageCropModal
        file={editingItem?.file}
        height={1440}
        width={1440}
        onApply={(file, previewUrl) => replaceItem(editingItem.id, file, previewUrl)}
        onCancel={() => setEditingItem(null)}
      />

      <div className=" flex justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default GalleryStep;
