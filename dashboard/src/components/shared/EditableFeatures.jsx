import React, { useState, useEffect } from "react";
import Edit from "../icons/Edit";
import Plus from "../icons/Plus";
import Trash from "../icons/Trash";
import { toast } from "react-hot-toast";

const EditableFeatures = ({ 
  features = [], 
  onUpdate, 
  disabled = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editFeatures, setEditFeatures] = useState(features);
  const [isLoading, setIsLoading] = useState(false);

  // Sync editFeatures with the incoming features prop
  useEffect(() => {
    setEditFeatures(features || []);
  }, [features]);

  const handleEdit = () => {
    setEditFeatures(features || []); // Ensure we have the latest features when starting to edit
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await onUpdate(editFeatures);
      toast.success("ویژگی‌های محصول با موفقیت بروزرسانی شد");
      setIsEditing(false);
    } catch (error) {
      toast.error("خطا در بروزرسانی ویژگی‌ها");
      setEditFeatures(features); // Reset to original features
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditFeatures(features);
    setIsEditing(false);
  };

  const addFeature = () => {
    setEditFeatures([
      ...editFeatures,
      { title: "", content: [""] }
    ]);
  };

  const removeFeature = (index) => {
    setEditFeatures(editFeatures.filter((_, i) => i !== index));
  };

  const updateFeatureTitle = (index, title) => {
    const updated = [...editFeatures];
    updated[index] = { ...updated[index], title };
    setEditFeatures(updated);
  };

  const updateFeatureContent = (featureIndex, contentIndex, content) => {
    const updated = [...editFeatures];
    updated[featureIndex].content[contentIndex] = content;
    setEditFeatures(updated);
  };

  const addContentItem = (featureIndex) => {
    const updated = [...editFeatures];
    updated[featureIndex].content.push("");
    setEditFeatures(updated);
  };

  const removeContentItem = (featureIndex, contentIndex) => {
    const updated = [...editFeatures];
    updated[featureIndex].content = updated[featureIndex].content.filter(
      (_, i) => i !== contentIndex
    );
    setEditFeatures(updated);
  };

  if (disabled) {
    return (
      <div className="flex flex-col gap-y-4">
        {features?.map((feature, index) => (
          <div key={index} className="bg-slate-100/80 rounded-primary px-4 py-2">
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <div className="flex flex-col gap-y-1">
              {feature.content?.map((item, itemIndex) => (
                <p key={itemIndex} className="text-sm">• {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 group">
      {!isEditing && (
        <button
          onClick={handleEdit}
          className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded-md"
          title="ویرایش ویژگی‌ها"
        >
          <Edit className="w-4 h-4 text-gray-500 hover:text-blue-600" />
        </button>
      )}

      {isEditing ? (
        <div className="space-y-4">
          {editFeatures.map((feature, featureIndex) => (
            <div key={featureIndex} className="border rounded-md p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => updateFeatureTitle(featureIndex, e.target.value)}
                  placeholder="عنوان ویژگی"
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  disabled={isLoading}
                />
                <button
                  onClick={() => removeFeature(featureIndex)}
                  disabled={isLoading}
                  className="ml-2 p-2 text-red-600 hover:bg-red-100 rounded-md"
                  title="حذف ویژگی"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                {feature.content?.map((item, contentIndex) => (
                  <div key={contentIndex} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateFeatureContent(featureIndex, contentIndex, e.target.value)}
                      placeholder="محتوای ویژگی"
                      className="flex-1 p-2 border border-gray-300 rounded-md"
                      disabled={isLoading}
                    />
                    <button
                      onClick={() => removeContentItem(featureIndex, contentIndex)}
                      disabled={isLoading}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-md"
                      title="حذف آیتم"
                    >
                      <Trash className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addContentItem(featureIndex)}
                  disabled={isLoading}
                  className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-100 rounded-md text-sm"
                >
                  <Plus className="w-3 h-3" />
                  افزودن آیتم
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex gap-2">
            <button
              onClick={addFeature}
              disabled={isLoading}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              <Plus className="w-4 h-4" />
              افزودن ویژگی
            </button>
            
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "در حال ذخیره..." : "ذخیره"}
            </button>
            
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
            >
              انصراف
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          {features?.map((feature, index) => (
            <div key={index} className="bg-slate-100/80 rounded-primary px-4 py-2">
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <div className="flex flex-col gap-y-1">
                {feature.content?.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-sm">• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditableFeatures;