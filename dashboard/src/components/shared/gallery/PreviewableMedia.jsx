import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const getMediaSrc = (media) => {
  if (!media) return "";
  if (typeof media === "string") return media;

  return media.url || media.src || media.location || media.path || "";
};

const isVideoSource = (src = "", type = "") =>
  type === "video" ||
  type?.startsWith?.("video") ||
  /\.(mp4|webm|ogg|mov)$/i.test(src);

const PreviewableMedia = ({
  alt = "preview",
  className = "",
  height,
  src,
  type,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mediaSrc = useMemo(() => getMediaSrc(src), [src]);
  const mediaType = type || src?.type || src?.mimetype || "";
  const isVideo = isVideoSource(mediaSrc, mediaType);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!mediaSrc) return null;

  const openPreview = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(true);
  };

  const closePreview = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setIsOpen(false);
  };

  const previewProps = {
    className: `${className} relative z-10 cursor-pointer`,
    height,
    width,
    onClick: openPreview,
  };

  return (
    <>
      {isVideo ? (
        <video {...previewProps} muted playsInline src={mediaSrc} />
      ) : (
        <img {...previewProps} alt={alt} src={mediaSrc} />
      )}

      {isOpen &&
        createPortal(
          <section
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            onClick={closePreview}
          >
            <button
              type="button"
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl leading-none text-gray-900 shadow"
              onClick={closePreview}
            >
              x
            </button>

            {isVideo ? (
              <video
                controls
                autoPlay
                className="max-h-[92vh] max-w-[96vw] rounded bg-black object-contain"
                src={mediaSrc}
                onClick={(event) => event.stopPropagation()}
              />
            ) : (
              <img
                alt={alt}
                className="max-h-[92vh] max-w-[96vw] rounded object-contain shadow-2xl"
                src={mediaSrc}
                onClick={(event) => event.stopPropagation()}
              />
            )}
          </section>,
          document.body
        )}
    </>
  );
};

export default PreviewableMedia;
