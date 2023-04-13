#stage 1
FROM node:latest AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/tiptop  /usr/share/nginx/html

