# Step 1: Use Node.js LTS base image
FROM node:20-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package files first (caching layer)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the app
COPY . .

# Step 6: Expose default port
EXPOSE 3000

# Step 7: Start app in dev mode (Tailwind hot reload)
CMD ["npm", "run", "dev"]
