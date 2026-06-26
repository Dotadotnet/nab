# Nab Admin Mobile

اپ پایه Android/Kotlin برای ادمین سایت.

## قابلیت‌های نسخه اول

- ورود ادمین با `/api/admin/sign-in`
- دیدن سفارش‌ها از `/api/order/get-orders`
- دیدن تیکت‌ها از `/api/support/tickets`
- خواندن و ارسال پیام روی هر تیکت
- دیدن اعلان‌های ادمین از `/api/notification/admin`

## اجرا

1. پوشه `mobile-admin` را با Android Studio باز کنید.
2. اگر سرور روی سیستم خودتان اجرا می‌شود، مقدار زیر در `app/build.gradle.kts` برای Emulator درست است:

```kotlin
buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:3000/api/\"")
```

3. اگر روی موبایل واقعی تست می‌کنید، `10.0.2.2` را با IP سیستم سرور در شبکه جایگزین کنید.
4. سرور Node را اجرا کنید و با ایمیل/رمز ادمین وارد شوید.

## نکته

این نسخه real-time نیست و با REST کار می‌کند. برای مرحله بعد می‌شود FCM یا Socket.IO اضافه کرد.
