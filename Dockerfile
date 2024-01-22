FROM node:18.16.0-alpine3.17 AS build
COPY package.json index.html ./
COPY ./src /src
RUN yarn
RUN yarn build

FROM nginx:latest
COPY --from=build ./dist /usr/share/nginx/html