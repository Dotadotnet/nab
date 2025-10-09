import React, { useState, useEffect } from "react";
import Edit from "../icons/Edit";
import Plus from "../icons/Plus";
import Minus from "../icons/Minus";
import { toast } from "react-hot-toast";

const EditableVariations = ({ 
  variations = [], 
  onUpdateVariation,
  onAdjustStock,
  disabled = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editVariations, setEditVariations] = useState(variations);
  const [isLoading, setIsLoading] = useState(false);

  // Sync editVariations with the incoming variations prop
  useEffect(() => {
    setEditVariations(variations || []);
  }, [variations]);

  const handleEdit = () => {
    setEditVariations(variations || []);
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Update each variation that has changed
      for (const variation of editVariations) {
        const original = variations.find(v => v._id === variation._id);
        if (original && (
          original.price !== variation.price ||
          original.stock !== variation.stock ||
          original.lowStockThreshold !== variation.lowStockThreshold
        )) {
          await onUpdateVariation({
            variationId: variation._id,
            price: variation.price,
            stock: variation.stock,
            lowStockThreshold: variation.lowStockThreshold
          });
        }
      }
      toast.success("تنوع‌های محصول با موفقیت بروزرسانی شد");
      setIsEditing(false);
    } catch (error) {
      toast.error("خطا در بروزرسانی تنوع‌ها");
      setEditVariations(variations);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditVariations(variations);
    setIsEditing(false);
  };

  const updateVariation = (index, field, value) => {
    const updated = [...editVariations];
    updated[index] = { ...updated[index], [field]: parseFloat(value) || 0 };
    setEditVariations(updated);
  };

  const handleStockAdjustment = async (variationId, operation, amount = 1) => {
    try {
      await onAdjustStock({
        variationId,
        adjustment: amount,
        operation
      });
      toast.success(`موجودی با موفقیت ${operation === 'increase' ? 'افزایش' : 'کاهش'} یافت`);
    } catch (error) {
      toast.error("خطا در تغییر موجودی");
    }
  };

  const getStockStatusColor = (stock, lowStockThreshold) => {
    if (stock === 0) return "bg-red-100 text-red-800";
    if (stock < lowStockThreshold) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getStockStatusText = (stock, lowStockThreshold) => {
    if (stock === 0) return "ناموجود";
    if (stock < lowStockThreshold) return "موجودی کم";
    return "موجود";
  };

  if (disabled) {
    return (
      <div className="space-y-4">
        {variations?.map((variation, index) => (
          <div key={variation._id || index} className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div>
                <span className="text-sm text-gray-600">واحد:</span>
                <p className="font-medium">{variation.unit?.title || 'نامشخص'}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">قیمت:</span>
                <p className="font-medium">{variation.price?.toLocaleString('fa-IR')} تومان</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">موجودی:</span>
                <p className="font-medium">{variation.stock}</p>
              </div>
              <div>
                <span className={`inline-block px-2 py-1 rounded text-xs ${getStockStatusColor(variation.stock, variation.lowStockThreshold)}`}>
                  {getStockStatusText(variation.stock, variation.lowStockThreshold)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 group">
      {!isEditing && (
        <button
          onClick={handleEdit}
          className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded-md"
          title="ویرایش تنوع‌ها"
        >
          <Edit className="w-4 h-4 text-gray-500 hover:text-blue-600" />
        </button>
      )}

      {isEditing ? (
        <div className="space-y-4">
          {editVariations.map((variation, index) => (
            <div key={variation._id || index} className="border rounded-lg p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">واحد</label>
                  <input
                    type="text"
                    value={variation.unit?.title || 'نامشخص'}
                    disabled
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">قیمت (تومان)</label>
                  <input
                    type="number"
                    value={variation.price || 0}
                    onChange={(e) => updateVariation(index, 'price', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">موجودی</label>
                  <input
                    type="number"
                    value={variation.stock || 0}
                    onChange={(e) => updateVariation(index, 'stock', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">حد آستانه</label>
                  <input
                    type="number"
                    value={variation.lowStockThreshold || 0}
                    onChange={(e) => updateVariation(index, 'lowStockThreshold', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">وضعیت</label>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${getStockStatusColor(variation.stock, variation.lowStockThreshold)}`}>
                    {getStockStatusText(variation.stock, variation.lowStockThreshold)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex gap-2">
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
        <div className="space-y-4">
          {variations?.map((variation, index) => (
            <div key={variation._id || index} className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <span className="text-sm text-gray-600">واحد:</span>
                  <p className="font-medium">{variation.unit?.title || 'نامشخص'}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">قیمت:</span>
                  <p className="font-medium">{variation.price?.toLocaleString('fa-IR')} تومان</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">موجودی:</span>
                  <p className="font-medium">{variation.stock}</p>
                </div>
                <div>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${getStockStatusColor(variation.stock, variation.lowStockThreshold)}`}>
                    {getStockStatusText(variation.stock, variation.lowStockThreshold)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleStockAdjustment(variation._id, 'increase')}
                    className="p-1 bg-green-600 text-white rounded hover:bg-green-700"
                    title="افزایش موجودی"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleStockAdjustment(variation._id, 'decrease')}
                    className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                    title="کاهش موجودی"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditableVariations;