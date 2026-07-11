import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MIN_CROP_SIZE = 80;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const filterPresets = {
  none: { label: "بدون فیلتر", css: "" },
  warm: { label: "گرم", css: "sepia(18%) saturate(115%) brightness(104%)" },
  cool: { label: "سرد", css: "saturate(108%) hue-rotate(350deg) brightness(102%)" },
  mono: { label: "سیاه سفید", css: "grayscale(100%)" },
  soft: { label: "نرم", css: "contrast(92%) brightness(108%) saturate(92%)" },
  vivid: { label: "زنده", css: "contrast(110%) saturate(125%)" },
};

const cropPresets = [
  { key: "1:1", label: "1:1", ratio: 1 },
  { key: "4:5", label: "4:5", ratio: 4 / 5 },
  { key: "3:4", label: "3:4", ratio: 3 / 4 },
  { key: "4:3", label: "4:3", ratio: 4 / 3 },
  { key: "16:9", label: "16:9", ratio: 16 / 9 },
];

const resolutionPresets = [
  { label: "800", width: 800, height: 800 },
  { label: "1080", width: 1080, height: 1080 },
  { label: "1440", width: 1440, height: 1440 },
  { label: "1920", width: 1920, height: 1920 },
];

function fitCropToRatio(width, height, ratio = 1) {
  const maxWidth = width * 0.8;
  const maxHeight = height * 0.8;
  let cropWidth = maxWidth;
  let cropHeight = cropWidth / ratio;

  if (cropHeight > maxHeight) {
    cropHeight = maxHeight;
    cropWidth = cropHeight * ratio;
  }

  return {
    height: cropHeight,
    width: cropWidth,
    x: (width - cropWidth) / 2,
    y: (height - cropHeight) / 2,
  };
}

function formatBytes(bytes = 0) {
  if (!bytes) return "-";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function Cross(props) {
  return (
    <svg
      {...props}
      className={props.className || "h-4 w-4"}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CropIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M7 3v14a2 2 0 0 0 2 2h12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7h12a2 2 0 0 1 2 2v12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 8 2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SizeIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResolutionIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <rect height="14" rx="2" width="18" x="3" y="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 21h10" strokeLinecap="round" />
    </svg>
  );
}

function SaveIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M5 20h14V8l-4-4H5v16Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20v-7h8v7M8 4v5h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RotateIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 1 0 3-6.2M4 4v6h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlipIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M12 4v16M5 7l5 5-5 5V7ZM19 7l-5 5 5 5V7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ImageEditorModal = ({
  file,
  height = 1440,
  onApply,
  onCancel,
  title = "برش تصویر",
  width = 1440,
}) => {
  const imageRef = useRef(null);
  const dragRef = useRef(null);
  const compareDragRef = useRef(false);
  const previewUrlRef = useRef("");
  const [source, setSource] = useState("");
  const [imageBox, setImageBox] = useState({ width: 0, height: 0 });
  const [crop, setCrop] = useState({ x: 40, y: 40, width: 260, height: 260 });
  const [cropRatio, setCropRatio] = useState(1);
  const [outputSize, setOutputSize] = useState({ width, height });
  const [activePanel, setActivePanel] = useState("edit");
  const [compare, setCompare] = useState(50);
  const [contrast, setContrast] = useState(100);
  const [filterPreset, setFilterPreset] = useState("none");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [quality, setQuality] = useState(92);
  const [previewUrl, setPreviewUrl] = useState("");
  const [sizeCompareUrl, setSizeCompareUrl] = useState("");
  const [previewSize, setPreviewSize] = useState(0);

  const cssFilter = useMemo(() => {
    return [`contrast(${contrast}%)`, filterPresets[filterPreset]?.css]
      .filter(Boolean)
      .join(" ");
  }, [contrast, filterPreset]);

  const cssTransform = useMemo(() => {
    return `scaleX(${flipX ? -1 : 1}) scaleY(${flipY ? -1 : 1}) rotate(${rotation}deg)`;
  }, [flipX, flipY, rotation]);

  const shouldShowCompare =
    activePanel === "size" ||
    (activePanel === "edit" &&
      (contrast !== 100 || filterPreset !== "none") &&
      rotation === 0 &&
      !flipX &&
      !flipY);

  useEffect(() => {
    if (!file) {
      setSource("");
      return undefined;
    }

    setCropRatio(width / height || 1);
    setOutputSize({ width, height });
    setCompare(50);

    const url = URL.createObjectURL(file);
    setSource(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
  }, []);

  useEffect(() => () => {
    if (sizeCompareUrl) URL.revokeObjectURL(sizeCompareUrl);
  }, [sizeCompareUrl]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      event.preventDefault();
      if (compareDragRef.current && imageBox.width) {
        const image = imageRef.current;
        const rect = image?.getBoundingClientRect();
        if (rect) {
          setCompare(clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100));
        }
        return;
      }

      const drag = dragRef.current;
      if (!drag) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;

      setCrop(() => {
        const next = { ...drag.startCrop };

        if (drag.type === "move") {
          next.x = clamp(drag.startCrop.x + dx, 0, imageBox.width - drag.startCrop.width);
          next.y = clamp(drag.startCrop.y + dy, 0, imageBox.height - drag.startCrop.height);
          return next;
        }

        const widthDelta = drag.type.includes("left") ? -dx : dx;
        const maxWidthByEdge = drag.type.includes("left")
          ? drag.startCrop.x + drag.startCrop.width
          : imageBox.width - drag.startCrop.x;
        const maxHeightByEdge = drag.type.includes("top")
          ? drag.startCrop.y + drag.startCrop.height
          : imageBox.height - drag.startCrop.y;
        const maxWidth = Math.min(maxWidthByEdge, maxHeightByEdge * cropRatio);
        const nextWidth = clamp(
          drag.startCrop.width + widthDelta,
          MIN_CROP_SIZE,
          maxWidth
        );
        const nextHeight = nextWidth / cropRatio;

        if (drag.type.includes("left")) next.x = drag.startCrop.x + drag.startCrop.width - nextWidth;
        if (drag.type.includes("top")) next.y = drag.startCrop.y + drag.startCrop.height - nextHeight;
        next.width = nextWidth;
        next.height = nextHeight;

        return next;
      });
    };

    const handlePointerUp = () => {
      dragRef.current = null;
      compareDragRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [cropRatio, imageBox]);

  const handleImageLoad = () => {
    const image = imageRef.current;
    if (!image) return;

    const { width: boxWidth, height: boxHeight } = image.getBoundingClientRect();
    setImageBox({ width: boxWidth, height: boxHeight });
    setCrop(fitCropToRatio(boxWidth, boxHeight, cropRatio));
  };

  const applyCropPreset = (preset) => {
    setCropRatio(preset.ratio);
    if (imageBox.width && imageBox.height) {
      setCrop(fitCropToRatio(imageBox.width, imageBox.height, preset.ratio));
    }
    setOutputSize({
      width: Math.round(height * preset.ratio),
      height,
    });
  };

  const applyResolutionPreset = (preset) => {
    setOutputSize({
      height: preset.height,
      width: preset.width,
    });
  };

  const startDrag = (event, type) => {
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = {
      type,
      startX: event.clientX,
      startY: event.clientY,
      startCrop: crop,
    };
  };

  const createOutputBlob = (callback, outputQuality = quality) => {
    const image = imageRef.current;
    if (!image || !imageBox.width || !imageBox.height) return;

    const scaleX = image.naturalWidth / imageBox.width;
    const scaleY = image.naturalHeight / imageBox.height;
    const canvas = document.createElement("canvas");
    const canvasWidth = Math.max(1, Math.round(outputSize.width));
    const canvasHeight = Math.max(1, Math.round(outputSize.height));
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext("2d");
    context.filter = cssFilter || "none";
    context.translate(canvasWidth / 2, canvasHeight / 2);
    context.rotate((rotation * Math.PI) / 180);
    context.scale(flipX ? -1 : 1, flipY ? -1 : 1);
    context.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      -canvasWidth / 2,
      -canvasHeight / 2,
      canvasWidth,
      canvasHeight
    );

    canvas.toBlob(callback, "image/webp", outputQuality / 100);
  };

  useEffect(() => {
    if (!imageBox.width || !imageRef.current) return undefined;

    const timer = setTimeout(() => {
      createOutputBlob((blob) => {
        if (!blob) return;
        if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
        const url = URL.createObjectURL(blob);
        previewUrlRef.current = url;
        setPreviewUrl(url);
        setPreviewSize(blob.size);
      });

      createOutputBlob((blob) => {
        if (!blob) return;
        setSizeCompareUrl((currentUrl) => {
          if (currentUrl) URL.revokeObjectURL(currentUrl);
          return URL.createObjectURL(blob);
        });
      }, 100);
    }, 200);

    return () => clearTimeout(timer);
  }, [contrast, crop, cssFilter, flipX, flipY, imageBox.width, outputSize, quality, rotation]);

  const handleCrop = () => {
    createOutputBlob((blob) => {
      if (!blob) return;
      const name = (file?.name || "image").replace(/\.[^.]+$/, "");
      const croppedFile = new File([blob], `crop-${outputSize.width}x${outputSize.height}-${name}.webp`, {
        type: "image/webp",
        lastModified: Date.now(),
      });
      onApply(croppedFile, URL.createObjectURL(blob));
    });
  };

  const resetEdits = () => {
    setContrast(100);
    setFilterPreset("none");
    setRotation(0);
    setFlipX(false);
    setFlipY(false);
    setCompare(50);
  };

  const toolButtons = [
    { key: "crop", label: "برش", icon: CropIcon },
    { key: "edit", label: "ویرایش تصویر", icon: EditIcon },
    { key: "size", label: "حجم عکس", icon: SizeIcon },
  ];

  if (!file || !source) return null;

  const page = (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-white p-4 text-gray-900" dir="rtl">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <h2 className="text-base font-bold text-gray-900">{title}</h2>
          <button
            aria-label="Close crop"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
            onClick={onCancel}
            type="button"
          >
            <Cross />
          </button>
        </div>

        <div className="grid gap-3 p-4">
          <div className="flex flex-wrap items-center gap-2">
              {toolButtons.map(({ key, label, icon: Icon }) => (
                <button
                  aria-label={label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                    activePanel === key
                    ? "border-red-500 bg-red-500 text-white"
                      : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  }`}
                  key={key}
                  title={label}
                  type="button"
                  onClick={() => setActivePanel(key)}
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
              <button
                aria-label="Resolution"
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                  activePanel === "resolution"
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                }`}
                title="Resolution"
                type="button"
                onClick={() => setActivePanel("resolution")}
              >
                <ResolutionIcon className="h-5 w-5" />
              </button>

            <span className="mx-1 h-8 w-px bg-gray-200" />

            {activePanel === "crop" && (
              <div className="flex min-h-10 flex-wrap items-center gap-1 rounded-lg border border-gray-300 bg-white p-1">
                {cropPresets.map((preset) => {
                  const isActive = Math.abs(cropRatio - preset.ratio) < 0.001;

                  return (
                    <button
                      className={`h-8 min-w-12 rounded-md px-2 text-xs transition ${
                        isActive
                          ? "bg-red-500 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                      }`}
                      key={preset.key}
                      type="button"
                      onClick={() => applyCropPreset(preset)}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            )}

            {activePanel === "edit" && (
              <>
                <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 px-3 text-gray-700">
                  <EditIcon className="h-4 w-4" />
                  <input
                    aria-label="کنتراست"
                    className="w-28 accent-red-500"
                    max="160"
                    min="40"
                    type="range"
                    value={contrast}
                    onChange={(event) => setContrast(Number(event.target.value))}
                  />
                  <span className="text-xs">{contrast}%</span>
                </div>
                <div className="relative">
                  <button
                    aria-expanded={isFilterMenuOpen}
                    aria-haspopup="true"
                    className={`inline-flex h-10 min-w-28 items-center justify-between gap-2 rounded-lg border px-3 text-xs transition ${
                      filterPreset !== "none"
                        ? "border-red-500 bg-red-500 !text-white shadow-sm [&_*]:!text-white"
                        : "border-gray-300 bg-white text-gray-800 hover:border-gray-900 hover:text-gray-950"
                    }`}
                    type="button"
                    onClick={() => setIsFilterMenuOpen((isOpen) => !isOpen)}
                  >
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 rounded-full border border-gray-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #facc15 38%, #38bdf8 39%, #2563eb 100%)",
                        filter: filterPresets[filterPreset]?.css || "none",
                      }}
                    />
                    <span>{filterPresets[filterPreset]?.label}</span>
                    <span
                      aria-hidden="true"
                      className={`text-[10px] transition ${isFilterMenuOpen ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  {isFilterMenuOpen && (
                    <div
                      aria-label="filter"
                      className="absolute right-0 top-11 z-40 grid w-64 grid-cols-2 gap-1 rounded-lg border border-gray-200 bg-white p-2 text-xs shadow-xl"
                      role="radiogroup"
                    >
                      {Object.entries(filterPresets).map(([key, preset]) => {
                        const isActive = filterPreset === key;

                        return (
                          <button
                            aria-checked={isActive}
                            className={`inline-flex h-9 items-center gap-2 rounded-md px-2 text-right transition ${
                              isActive
                                ? "bg-red-500 !text-white shadow-sm [&_*]:!text-white"
                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                            }`}
                            key={key}
                            role="radio"
                            title={preset.label}
                            type="button"
                            onClick={() => {
                              setFilterPreset(key);
                              setIsFilterMenuOpen(false);
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className={`h-5 w-5 shrink-0 rounded-full border ${
                                isActive ? "border-white/80" : "border-gray-300"
                              }`}
                              style={{
                                background:
                                  "linear-gradient(135deg, #f97316 0%, #facc15 38%, #38bdf8 39%, #2563eb 100%)",
                                filter: preset.css || "none",
                              }}
                            />
                            <span className={`truncate ${isActive ? "!text-white" : ""}`}>
                              {preset.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <select
                  aria-label="فیلتر"
                  className="sr-only"
                  value={filterPreset}
                  onChange={(event) => setFilterPreset(event.target.value)}
                >
                  {Object.entries(filterPresets).map(([key, preset]) => (
                    <option key={key} value={key}>
                      {preset.label}
                    </option>
                  ))}
                </select>
                <button
                  aria-label="چرخش چپ"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                  title="چرخش چپ"
                  type="button"
                  onClick={() => setRotation((value) => (value - 90 + 360) % 360)}
                >
                  <RotateIcon className="h-5 w-5 -scale-x-100" />
                </button>
                <button
                  aria-label="چرخش راست"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                  title="چرخش راست"
                  type="button"
                  onClick={() => setRotation((value) => (value + 90) % 360)}
                >
                  <RotateIcon className="h-5 w-5" />
                </button>
                <button
                  aria-label="Flip افقی"
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                    flipX ? "border-red-500 text-red-600" : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  }`}
                  title="Flip افقی"
                  type="button"
                  onClick={() => setFlipX((value) => !value)}
                >
                  <FlipIcon className="h-5 w-5" />
                </button>
                <button
                  aria-label="Flip عمودی"
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                    flipY ? "border-red-500 text-red-600" : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  }`}
                  title="Flip عمودی"
                  type="button"
                  onClick={() => setFlipY((value) => !value)}
                >
                  <FlipIcon className="h-5 w-5 rotate-90" />
                </button>
              </>
            )}

            {activePanel === "size" && (
              <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 px-3 text-gray-700">
                <SizeIcon className="h-4 w-4" />
                <input
                  aria-label="کیفیت خروجی"
                  className="w-32 accent-red-500"
                  max="100"
                  min="10"
                  type="range"
                  value={quality}
                  onChange={(event) => setQuality(Number(event.target.value))}
                />
                <span className="text-xs">{quality}%</span>
                <span className="text-xs text-gray-500">{formatBytes(previewSize || file.size)}</span>
                {previewSize ? (
                  <span className="text-xs text-red-600">
                    {Math.max(0, Math.round((1 - previewSize / file.size) * 100))}%
                  </span>
                ) : null}
              </div>
            )}

            {activePanel === "resolution" && (
              <div className="flex min-h-10 flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-1 text-gray-700">
                <ResolutionIcon className="h-4 w-4" />
                <div className="flex items-center gap-1">
                  {resolutionPresets.map((preset) => {
                    const isActive =
                      outputSize.width === preset.width && outputSize.height === preset.height;

                    return (
                      <button
                        className={`h-8 rounded-md px-2 text-xs transition ${
                          isActive
                            ? "bg-red-500 text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                        }`}
                        key={preset.label}
                        type="button"
                        onClick={() => applyResolutionPreset(preset)}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
                <span className="h-6 w-px bg-gray-200" />
                <label className="flex items-center gap-1 text-xs">
                  W
                  <input
                    className="h-8 w-20 rounded-md border border-gray-300 px-2 text-left text-xs"
                    min="1"
                    type="number"
                    value={outputSize.width}
                    onChange={(event) =>
                      setOutputSize((current) => ({
                        ...current,
                        width: Math.max(1, Number(event.target.value) || 1),
                      }))
                    }
                  />
                </label>
                <label className="flex items-center gap-1 text-xs">
                  H
                  <input
                    className="h-8 w-20 rounded-md border border-gray-300 px-2 text-left text-xs"
                    min="1"
                    type="number"
                    value={outputSize.height}
                    onChange={(event) =>
                      setOutputSize((current) => ({
                        ...current,
                        height: Math.max(1, Number(event.target.value) || 1),
                      }))
                    }
                  />
                </label>
                <span className="text-xs text-gray-500">
                  {outputSize.width}x{outputSize.height}
                </span>
              </div>
            )}

            <span className="mx-1 h-8 w-px bg-gray-200" />

            <button
              aria-label="ذخیره"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white transition hover:bg-red-400"
              title="ذخیره"
              type="button"
              onClick={handleCrop}
            >
              <SaveIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[68vh] overflow-auto rounded-lg bg-gray-100">
            <div className="relative mx-auto w-fit select-none">
              <img
                alt="crop"
                className="block max-h-[72vh] max-w-full"
                onLoad={handleImageLoad}
                ref={imageRef}
                src={source}
                style={{
                  filter: activePanel === "edit" && !shouldShowCompare ? cssFilter : "none",
                  opacity: activePanel === "size" && sizeCompareUrl ? 0 : 1,
                  transform: activePanel === "edit" ? cssTransform : "none",
                  transformOrigin: "center",
                }}
              />
              {activePanel === "size" && sizeCompareUrl && (
                <img
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 block h-full w-full object-fill"
                  src={sizeCompareUrl}
                />
              )}
              <img
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 block h-full w-full object-fill ${
                  shouldShowCompare ? "" : "hidden"
                }`}
                src={activePanel === "size" && previewUrl ? previewUrl : source}
                style={{
                  clipPath: `inset(0 ${100 - compare}% 0 0)`,
                  filter: activePanel === "edit" ? cssFilter : "none",
                  transform: activePanel === "edit" ? cssTransform : "none",
                  transformOrigin: "center",
                }}
              />
              {imageBox.width ? (
                <>
                  {activePanel === "crop" && (
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />
                  )}
                  {shouldShowCompare && (
                    <>
                  <div
                    className="absolute bottom-0 top-0 z-20 w-px cursor-ew-resize bg-white"
                    style={{ left: `${compare}%` }}
                    onPointerDown={(event) => {
                      event.preventDefault();
                      compareDragRef.current = true;
                    }}
                  >
                    <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-red-500 shadow" />
                  </div>
                    </>
                  )}
                  {activePanel === "crop" && (
                  <div
                    className="absolute z-10 cursor-move border-2 border-red-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]"
                    onPointerDown={(event) => startDrag(event, "move")}
                    style={{
                      height: crop.height,
                      right: imageBox.width - crop.x - crop.width,
                      top: crop.y,
                      width: crop.width,
                    }}
                  >
                    <div className="grid h-full w-full grid-cols-3 grid-rows-3">
                      {Array.from({ length: 9 }).map((_, index) => (
                        <span className="border border-white/25" key={index} />
                      ))}
                    </div>
                    {[
                      ["top-left", "-left-3 -top-3 cursor-nwse-resize"],
                      ["top-right", "-right-3 -top-3 cursor-nesw-resize"],
                      ["bottom-left", "-bottom-3 -left-3 cursor-nesw-resize"],
                      ["bottom-right", "-bottom-3 -right-3 cursor-nwse-resize"],
                    ].map(([handle, className]) => (
                      <span
                        className={`absolute h-5 w-5 rounded-full border-2 border-white bg-red-500 ${className}`}
                        key={handle}
                        onPointerDown={(event) => startDrag(event, handle)}
                      />
                    ))}
                  </div>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(page, document.body);
};

export default ImageEditorModal;
