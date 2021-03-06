#Stage: build server
FROM node:latest as node-builder
WORKDIR /server

COPY server/package*.json ./
COPY server/API/package*.json ./API/
COPY server/Data/package*.json ./Data/
COPY server/Domain/package*.json ./Domain/

RUN npm run install-all
RUN npm install -g pm2
COPY server/. .

CMD npm run start-prod