FROM node:18-alpine

WORKDIR /jrback

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4600

CMD ["npm","start"]