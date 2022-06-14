FROM node:alpine

MAINTAINER inbluemoon

ENV NODE_OPTIONS=--openssl-legacy-provider

# set app env
ENV NODE_ENV=production

ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=3000

RUN mkdir -p /app

COPY . /app

WORKDIR /app

RUN npm cache clean --force

RUN npm install --no-package-lock --registry=https://registry.npm.taobao.org

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run start"]
