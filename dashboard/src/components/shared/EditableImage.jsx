import React, { useState, useRef } from "react";
import Edit from "../icons/Edit";
import Upload from "../icons/Upload";
import { toast } from "react-hot-toast";

const EditableImage = ({ 
  src, 
  alt, 
  onUpdate, 
  className = "",
  disabled = false,
  type = "thumbnail", // "thumbnail" or "gallery"
  onClick // Add onClick prop for gallery images
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpdate = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("لطفاً یک فایل تصویری انتخاب کنید");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم فایل نباید بیشتر از 5 مگابایت باشد");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append(type, file);
      
      await onUpdate(formData);
      toast.success(`${type === 'thumbnail' ? 'تصویر اصلی' : 'تصاویر گالری'} با موفقیت بروزرسانی شد`);
    } catch (error) {
      toast.error(`خطا در بروزرسانی ${type === 'thumbnail' ? 'تصویر اصلی' : 'تصاویر گالری'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  if (disabled) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-50' : ''}`}
        onClick={onClick}
      />
      
      {/* Edit overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
        <button
          onClick={handleEditClick}
          disabled={isLoading}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg disabled:opacity-50"
          title={`ویرایش ${type === 'thumbnail' ? 'تصویر اصلی' : 'تصویر گالری'}`}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Edit className="w-5 h-5 text-blue-600" />
          )}
        </button>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpdate}
        className="hidden"
      />
    </div>
  );
};

export default EditableImage;