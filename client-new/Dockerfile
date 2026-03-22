FROM node:18-alpine

WORKDIR /jrfront

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5234

CMD ["npm","start"]