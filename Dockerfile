FROM node:12.17.0

ARG BUILD_VERSION
WORKDIR /build
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
RUN yarn build

FROM nginx:latest
RUN echo  '\n\
    server {\n\
        listen 80 default_server;\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        server_name _;\n\
        location / {\n\
            try_files $uri /index.html;\n\
        }\n\
    }\n' > /etc/nginx/conf.d/default.conf
COPY --from=0 /build/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
