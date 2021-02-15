# Builder stage
FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY . .
RUN yarn
RUN yarn build

# Production Stage
FROM node:12-alpine as production
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 4000
CMD [ "yarn", "start" ]
