# Dockerfile for React Frontend with Environment Variables
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
ARG VITE_BACKEND_URL  # Accept environment variable during build
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm install --legacy-peer-deps
COPY . .

# Exit if VITE_BACKEND_URL is not set
RUN if [ -z "$VITE_BACKEND_URL" ]; then echo "VITE_BACKEND_URL is not set" && exit 1; fi

# Run npm build with explicit environment variable
RUN VITE_BACKEND_URL=$VITE_BACKEND_URL npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
