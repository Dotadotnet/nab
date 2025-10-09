import React, { useState, useEffect } from "react";
import Edit from "../icons/Edit";
import { toast } from "react-hot-toast";

const EditableField = ({ 
  value, 
  field, 
  onUpdate, 
  type = "text", 
  multiline = false,
  className = "",
  placeholder = "",
  disabled = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value || "");
  const [isLoading, setIsLoading] = useState(false);

  // Sync editValue with the incoming value prop
  useEffect(() => {
    setEditValue(value || "");
  }, [value]);

  const handleEdit = () => {
    setEditValue(value || ""); // Ensure we have the latest value when starting to edit
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editValue === value) {
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    try {
      await onUpdate(field, editValue);
      toast.success(`${getFieldDisplayName(field)} با موفقیت بروزرسانی شد`);
      setIsEditing(false);
    } catch (error) {
      toast.error(`خطا در بروزرسانی ${getFieldDisplayName(field)}`);
      setEditValue(value); // Reset to original value
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value || "");
    setIsEditing(false);
  };

  const getFieldDisplayName = (field) => {
    const fieldNames = {
      title: "عنوان",
      summary: "خلاصه",
      description: "توضیحات",
      discountAmount: "مقدار تخفیف",
      isFeatured: "ویژه"
    };
    return fieldNames[field] || field;
  };

  if (disabled) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-gray-500">{value || placeholder}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-2 group ${className}`}>
      {isEditing ? (
        <div className="flex-1 flex flex-col gap-2">
          {multiline ? (
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              rows={4}
              disabled={isLoading}
            />
          ) : (
            <input
              type={type}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder={placeholder}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={isLoading}
            />
          )}
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
            >
              {isLoading ? "در حال ذخیره..." : "ذخیره"}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 text-sm"
            >
              انصراف
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1">
            {multiline ? (
              <p className="whitespace-pre-wrap">{value || placeholder}</p>
            ) : (
              <span>{value || placeholder}</span>
            )}
          </div>
          <button
            onClick={handleEdit}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-100 rounded-md"
            title={`ویرایش ${getFieldDisplayName(field)}`}
          >
            <Edit className="w-4 h-4 text-gray-500 hover:text-blue-600" />
          </button>
        </>
      )}
    </div>
  );
};

export default EditableField;