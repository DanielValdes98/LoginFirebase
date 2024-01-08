# Stage 1
FROM node:20.10.0 AS build-env
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:1.25.3-alpine
COPY --from=build-env /app/dist/login-firebase /usr/share/nginx/html
COPY --from=build-env /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80