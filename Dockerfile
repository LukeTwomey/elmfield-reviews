FROM node:18.16.0-alpine3.17
COPY package.json index.html ./
COPY ./src /src
RUN yarn
RUN yarn build
COPY --chown=node ./dist ./
ENTRYPOINT ["./dist/index.html"]