# Builder stage
# This stage compiles our TypeScript to get the JavaScript code
FROM node:12 AS builder

WORKDIR /src/app

COPY package*.json ./

RUN npm install -g tsc

COPY tsconfig*.json ./
COPY ./src ./src

RUN npm run build

FROM node:12 AS production

# Production Stage
# This stage gets back the JavaScript code from the builder stage
# It will also install the production packages only
FROM node:12.16.0-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./

RUN npm install

# We just need the build to execute the command
COPY --from=builder /src/app/build ./build