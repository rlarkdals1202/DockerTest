FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY ./ ./

RUN yarn build

FROM nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html