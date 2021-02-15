FROM node:12 AS development

WORKDIR /src/app

COPY package*.json ./

RUN npm install --only-development

COPY . .

RUN npm run build

FROM node:12 AS production
