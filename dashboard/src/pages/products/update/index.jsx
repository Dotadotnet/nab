import Left from "@/components/details/Left";
import Right from "@/components/details/Right";
import {
  useGetProductQuery,
  useUpdateProductApproveMutation,
  useUpdateProductRejectMutation,
  useUpdateProductReviewMutation,
  useUpdateProductStatusMutation,
  useUpdateProductFieldMutation,
  useUpdateProductFeaturesMutation,
  useUpdateProductImagesMutation,
  useUpdateProductVariationMutation,
  useAdjustVariationStockMutation
} from "@/services/product/productApi";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import ControlPanel from "../../ControlPanel";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Apply from "@/components/icons/Apply";
import Reject from "@/components/icons/Reject";
import Review from "@/components/icons/Review";
import ChevronRight from "@/components/icons/ChevronRight";
import StatusSwitch from "@/components/shared/button/StatusSwitch";
import { QRCodeCanvas } from "qrcode.react";
import Qrc from "@/components/icons/Qrc";
import Modal from "@/components/shared/modal/Modal";
import EditableField from "@/components/shared/EditableField";
import EditableVariations from "@/components/shared/EditableVariations";
import Edit from "@/components/icons/Edit";

const Update = () => {
  const { product_id } = useParams();
  const admin = useSelector((state) => state?.auth?.admin);
  const [showQRCode, setShowQRCode] = useState(false);
  console.log("admin", admin);
  const id = product_id;
  const {
    data: productData,
    error: productError,
    isLoading: productLoading
  } = useGetProductQuery(id);
  // Helper function to get translated field or fallback to direct field
  const getTranslatedField = (product, fieldName, locale = 'fa') => {
    // First try to get from translations
    const translation = product?.translations?.find(
      (tr) => tr.translation?.language === locale
    )?.translation?.fields;
    
    if (translation && translation[fieldName]) {
      return translation[fieldName];
    }
    
    // Fallback to direct field
    return product?.[fieldName] || '';
  };

  const product = useMemo(() => {
    const data = productData?.data || {};
    
    // Extract translated fields
    const translatedTitle = getTranslatedField(data, 'title');
    const translatedSummary = getTranslatedField(data, 'summary');
    const translatedDescription = getTranslatedField(data, 'description');
    const translatedFeatures = getTranslatedField(data, 'features');
    
    // Create enhanced product object with both direct and translated fields
    const enhancedProduct = {
      ...data,
      // Use translated fields if available, otherwise use direct fields
      title: translatedTitle || data.title,
      summary: translatedSummary || data.summary,
      description: translatedDescription || data.description,
      features: translatedFeatures || data.features
    };
    
    console.log('🔍 Product Data Received:', {
      originalData: data,
      translations: data.translations,
      extractedFields: {
        title: translatedTitle,
        summary: translatedSummary,
        description: translatedDescription,
        features: translatedFeatures
      },
      enhancedProduct: enhancedProduct
    });
    
    return enhancedProduct;
  }, [productData]);
  
  // Field update mutations
  const [updateProductField] = useUpdateProductFieldMutation();
  const [updateProductFeatures] = useUpdateProductFeaturesMutation();
  const [updateProductImages] = useUpdateProductImagesMutation();
  const [updateProductVariation] = useUpdateProductVariationMutation();
  const [adjustVariationStock] = useAdjustVariationStockMutation();
  
  const [
    updateProductApprove,
    { isLoading: approveLoading, data: approveData, error: approveError }
  ] = useUpdateProductApproveMutation();
  const [
    updateProductReject,
    { isLoading: rejectLoading, data: rejectData, error: rejectError }
  ] = useUpdateProductRejectMutation();
  const [
    updateProductReview,
    { isLoading: reviewLoading, data: reviewData, error: reviewError }
  ] = useUpdateProductReviewMutation();
  const [
    updateProductStatus,
    { isLoading: statusLoading, data: statusData, error: statusError }
  ] = useUpdateProductStatusMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rejectMessage, setRejectMessage] = useState("");
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  
  // Field update handler
  const handleFieldUpdate = async (field, value) => {
    try {
      await updateProductField({
        id: product_id,
        field,
        value
      }).unwrap();
      toast.success(`${getFieldDisplayName(field)} با موفقیت بروزرسانی شد`);
    } catch (error) {
      toast.error(`خطا در بروزرسانی ${getFieldDisplayName(field)}`);
      throw error;
    }
  };
  
  // Features update handler
  const handleFeaturesUpdate = async (features) => {
    try {
      await updateProductFeatures({
        id: product_id,
        features
      }).unwrap();
      toast.success("ویژگی‌های محصول با موفقیت بروزرسانی شد");
    } catch (error) {
      toast.error("خطا در بروزرسانی ویژگی‌ها");
      throw error;
    }
  };
  
  // Images update handler
  const handleImageUpdate = async (formData) => {
    try {
      await updateProductImages({
        id: product_id,
        formData
      }).unwrap();
      toast.success("تصاویر محصول با موفقیت بروزرسانی شد");
    } catch (error) {
      toast.error("خطا در بروزرسانی تصاویر");
      throw error;
    }
  };
  
  // Variation update handler
  const handleVariationUpdate = async (variationData) => {
    try {
      await updateProductVariation(variationData).unwrap();
    } catch (error) {
      toast.error("خطا در بروزرسانی تنوع");
      throw error;
    }
  };
  
  // Stock adjustment handler
  const handleStockAdjustment = async (stockData) => {
    try {
      await adjustVariationStock(stockData).unwrap();
    } catch (error) {
      toast.error("خطا در تغییر موجودی");
      throw error;
    }
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
  useEffect(() => {
    if (productLoading) {
      toast.loading("در حال دریافت محصول...", { id: "productData" });
    }

    if (productData) {
      toast.success(productData?.description, { id: "productData" });

      if (
        (admin?.role === "superAdmin" &&
          product?.publishStatus === "pending") ||
        (admin?.role === "admin" && product?.publishStatus === "rejected")
      ) {
        setTimeout(() => {
          setIsModalOpen(true);
        }, 1000);
      }
    }

    if (productError) {
      toast.error(productError?.description, { id: "productData" });
    }

    if (approveLoading) {
      toast.loading(approveLoading?.description, { id: "approveData" });
    }

    if (approveData) {
      toast.success(approveData?.description, { id: "approveData" });
      setIsModalOpen(false);
    }

    if (approveError) {
      toast.error(approveError?.description, {
        id: "approveData"
      });
    }

    if (rejectLoading) {
      toast.loading(rejectLoading?.description, { id: "rejectData" });
    }

    if (rejectData) {
      toast.success(rejectData?.description, { id: "rejectData" });
    }

    if (rejectError) {
      toast.error(rejectError?.description, {
        id: "rejectData"
      });
    }

    if (reviewLoading) {
      toast.loading(reviewLoading?.description, { id: "reviewLoading" });
    }

    if (reviewData) {
      toast.success(reviewData?.description, { id: "reviewData" });
    }

    if (reviewError) {
      toast.error(reviewError?.description, {
        id: "reviewError"
      });
    }
    if (statusLoading) {
      toast.loading(statusLoading?.description, { id: "statusData" });
    }

    if (statusData) {
      toast.success(statusData?.description, { id: "statusData" });
    }

    if (statusError) {
      toast.error(statusError?.description, {
        id: "statusData"
      });
    }
  }, [
    productData,
    productError,
    admin,
    productLoading,
    approveLoading,
    approveData,
    approveError,
    rejectLoading,
    rejectData,
    rejectError,
    reviewLoading,
    reviewData,
    reviewError,
    statusLoading,
    statusData,
    statusError
  ]);

  return (
    <>
      <ControlPanel>
        <div className="flex justify-between items-center border-b-2 border-dashed ">
          <NavLink
            to={"/products"}
            className={
              "  group items-center reject-button rounded-full  !bg-red-800/20 shadow-lg !p-4 text-slate-300 transition-all hover:text-slate-100 z-50 mb-2"
            }
          >
            <ChevronRight />
          </NavLink>
          <div className="flex items-center justify-center">
            <StatusSwitch
              label="وضعیت"
              id="status"
              defaultChecked={product?.status === "active" ? true : false}
              onChange={() => {
                updateProductStatus({ id: product_id });
              }}
            />
            <div>
              <button
                onClick={() => setShowQRCode(true)}
                className=" text-white px-4 py-2 rounded-md"
              >
                <Qrc />
              </button>
            </div>

            <Modal
              isOpen={showQRCode}
              onClose={() => setShowQRCode(false)}
              className="p-4 lg:w-1/4"
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مدال هنگام کلیک داخل آن
              >
                <QRCodeCanvas value={product.qrCode} size={256} />
                <p className="mt-4 text-lg font-bold">QR کد محصول</p>
              </div>
            </Modal>
          </div>
        </div>
        
        {/* Comprehensive Product Editing Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Edit className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">ویرایش محصول</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700 border-b pb-2">اطلاعات پایه</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان محصول</label>
                <EditableField
                  value={product?.title}
                  field="title"
                  onUpdate={handleFieldUpdate}
                  placeholder="عنوان محصول را وارد کنید"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">خلاصه محصول</label>
                <EditableField
                  value={product?.summary}
                  field="summary"
                  onUpdate={handleFieldUpdate}
                  multiline={true}
                  placeholder="خلاصه محصول را وارد کنید"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات محصول</label>
                <EditableField
                  value={product?.description}
                  field="description"
                  onUpdate={handleFieldUpdate}
                  multiline={true}
                  placeholder="توضیحات کامل محصول را وارد کنید"
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Product Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700 border-b pb-2">تنظیمات محصول</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مقدار تخفیف (درصد)</label>
                <EditableField
                  value={product?.discountAmount}
                  field="discountAmount"
                  onUpdate={handleFieldUpdate}
                  type="number"
                  placeholder="0"
                  className="w-full"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">محصول ویژه:</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={product?.isFeatured || false}
                    onChange={(e) => handleFieldUpdate('isFeatured', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وضعیت محصول</label>
                <div className="text-sm text-gray-600">
                  وضعیت فعلی: <span className={`inline-block px-2 py-1 rounded text-xs ${product?.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product?.status === 'active' ? 'فعال' : 'غیرفعال'}
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وضعیت انتشار</label>
                <div className="text-sm text-gray-600">
                  وضعیت فعلی: <span className={`inline-block px-2 py-1 rounded text-xs ${
                    product?.publishStatus === 'approved' ? 'bg-green-100 text-green-800' :
                    product?.publishStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product?.publishStatus === 'approved' ? 'تایید شده' : 
                     product?.publishStatus === 'pending' ? 'در انتظار تایید' : 'رد شده'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Variations Section */}
        {product?.variations && product.variations.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Edit className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">تنوع‌های محصول و موجودی</h2>
            </div>
            
            <EditableVariations
              variations={product.variations}
              onUpdateVariation={handleVariationUpdate}
              onAdjustStock={handleStockAdjustment}
            />
          </div>
        )}
        
        <div className="h-full w-full flex flex-col gap-y-20 ">
          <div className="grid grid-cols-12 gap-8">
            {productLoading || !product ? (
              <>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="h-[200px] w-full rounded bg-gray-200 animate-pulse" />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="w-full flex flex-col gap-y-4">
                    <div className="h-[200px] w-full rounded bg-gray-200 animate-pulse" />
                    <div className="h-[100px] w-full rounded bg-gray-200 animate-pulse" />
                    <div className="h-[50px] w-full rounded bg-gray-200 animate-pulse" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <Left 
                  product={product} 
                  onImageUpdate={handleImageUpdate}
                />
                <Right 
                  product={product} 
                  onFieldUpdate={handleFieldUpdate}
                  onFeaturesUpdate={handleFeaturesUpdate}
                />
              </>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-opacity-70 transition-all ease-in-out duration-500"
            style={{
              transform: "translateY(0)",
              opacity: 1
            }}
          >
            <div className="bg-white dark:bg-gray-900 text-center p-4 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)]">
              <p className="text-2xl">ایا این محصول مورد تایید شما می باشد</p>

              <div className="flex justify-around items-center">
                {admin?.role === "superAdmin" ? (
                  <>
                    <div>
                      <button
                        className="group w-[150px] py-2 rounded-md apply-button"
                        onClick={() => {
                          updateProductApprove({ id: product._id });
                        }}
                      >
                        <Apply />
                        <span className="mr-2">تایید</span>
                      </button>
                    </div>
                    <div>
                      {product?.creator?.role === "superAdmin" ? (
                        <button
                          className="group border reject-button w-[150px]"
                          onClick={() => setIsModalOpen(false)}
                        >
                          <Reject />
                          <span className="mr-2">انصراف</span>
                        </button>
                      ) : (
                        <button
                          className="group border reject-button w-[150px]"
                          onClick={() => setIsRejectModalOpen(true)}
                        >
                          <Reject />
                          <span className="mr-2">رد</span>
                        </button>
                      )}
                    </div>
                  </>
                ) : user?.role === "admin" ? (
                  <>
                    <div>
                      <button
                        className="group w-[150px] py-2 rounded-md review-button"
                        onClick={() => {
                          updateProductReview({ id: product._id });
                        }}
                      >
                        <Review />
                        <span className="mr-2">بازبینی</span>
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        )}
        {isRejectModalOpen && (
          <div
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-opacity-70 transition-all ease-in-out duration-500"
            style={{
              transform: "translateY(0)",
              opacity: 1
            }}
          >
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)]">
              <div className="flex justify-center items-center flex-col gap-y-4">
                <textarea
                  value={rejectMessage}
                  onChange={(e) => setRejectMessage(e.target.value)}
                  placeholder="لطفاً دلیل رد را وارد کنید"
                  className="border p-2 rounded-md w-full mb-4 h-32"
                />
                <button
                  className="group w-[150px] py-2 rounded-md reject-button"
                  onClick={() => {
                    updateProductReject({ id: product._id, rejectMessage });
                  }}
                >
                  <Reject />
                  <span className="mr-2">ارسال دلیل رد</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </ControlPanel>
    </>
  );
};

export default Update;
