FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ARG VITE_DATABASE_URL
ENV VITE_DATABASE_URL=$VITE_DATABASE_URL
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy the static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html/coaching_areas
# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY vite-nginx.conf /etc/nginx/conf.d/nginx.conf

# Expose the port that Nginx will listen on
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
