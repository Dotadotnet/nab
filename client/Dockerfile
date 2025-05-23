# استفاده از تصویر پایه جدیدتر
FROM node:20

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی فایل‌های بسته
COPY package.json package-lock.json ./

# نصب وابستگی‌ها
RUN npm install

# کپی بقیه فایل‌ها
COPY . .

# بیلد پروژه
RUN npm run build

# باز کردن پورت
EXPOSE 3000

# اجرای برنامه
CMD ["npm", "start"]