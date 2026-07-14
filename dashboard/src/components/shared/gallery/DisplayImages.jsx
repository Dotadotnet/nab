import React from "react";
import PreviewableMedia from "./PreviewableMedia";

const DisplayImages = ({ galleryPreview, imageSize = 600 }) => {
  return (
    <div className="flex flex-row overflow-x-auto gap-x-2 mt-4">
      {galleryPreview?.length > 0 &&
        galleryPreview.map((item, index) => {
          const src = typeof item === "string" ? item : item.url;
          const type = typeof item === "string" ? "image" : item.type;
          const isVideo = type === "video" || /\.(mp4|webm|ogg|mov)$/i.test(src);

          return (
            <div key={index} className="flex-shrink-0 mb-2">
              <PreviewableMedia
                alt="gallery"
                className="rounded object-cover"
                height={imageSize}
                src={src}
                type={isVideo ? "video" : "image"}
                width={imageSize}
              />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayImages;
