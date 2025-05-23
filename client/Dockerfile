FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

# نصب وابستگی‌ها
RUN npm ci

# ریبیلد برای پکیج‌های native (مخصوصاً lightningcss)
RUN npm rebuild lightningcss \
  && npm install --omit=dev

COPY . .

# مجدد rebuild چون سورس‌ها الان کپی شدن
RUN npm rebuild lightningcss

# بیلد پروژه
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
