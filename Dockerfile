FROM node:17-alpine

WORKDIR /usr/src/app

COPY ./device-api/package*.json ./
 
RUN npm install

COPY ./device-api/ ./

EXPOSE 3000

CMD [ "npm", "start" ]