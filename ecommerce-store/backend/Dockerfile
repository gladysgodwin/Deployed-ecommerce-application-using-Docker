FROM node:16-alpine

WORKDIR /backend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "app.js" ]
