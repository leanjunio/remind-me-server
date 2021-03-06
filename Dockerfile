FROM node:12-alpine as builder
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run clean
RUN npm run build

FROM node:12-alpine as execute
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ormconfig*.json ./
RUN npm install
COPY --from=builder /usr/app/dist ./dist
EXPOSE 4000
CMD ["npm", "start"]
