
FROM node:12-alpine 
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4000
CMD [ "npm", "start" ]
