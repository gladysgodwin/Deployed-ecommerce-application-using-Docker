FROM node:16-alpine

WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "App.js" ]
