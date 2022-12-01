FROM node:14-alpine

RUN apk add --no-cache --virtual .gyp python3 make g++

WORKDIR /frontend

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm build

EXPOSE 3000

CMD [ "npm", "start" ]
