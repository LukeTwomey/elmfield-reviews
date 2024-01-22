FROM node:18.16.0-alpine3.17
COPY package.json index.html ./
COPY ./src /src
RUN yarn
RUN yarn build
# RUN chmod +x ./dist/index.html
# ENTRYPOINT ["./dist/index.html"]
FROM nginx:latest
COPY ./dist /usr/share/nginx/html/