# build environment
FROM node:14-alpine as build

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm run build

# production environment
FROM nginx:1.19-alpine

COPY --from=build /frontend/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]