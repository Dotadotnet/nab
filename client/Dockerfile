# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Build your app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
