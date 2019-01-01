FROM node
RUN mkdir /work
WORKDIR /work
COPY . /work
RUN npm ci
RUN npm run build

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/
RUN mkdir -p /var/www
COPY --from=0 /work/src/.vuepress/dist /var/www
