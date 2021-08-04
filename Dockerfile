FROM node:12.16-alpine

COPY ./ /vue-docker
WORKDIR /vue-docker
RUN npm install && npm run build

FROM nginx:1.17.4-alpine
RUN mkdir /vue-docker
COPY --from=0 /vue-docker/dist /vue-docker
COPY nginx/default.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]