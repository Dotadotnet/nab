FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

# نصب وابستگی‌ها
RUN npm ci

# ریبیلد کردن native modules (مثل lightningcss)
RUN npm rebuild lightningcss

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
