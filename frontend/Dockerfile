FROM node:22.10.0-alpine3.19 as deps
WORKDIR /app
COPY package.json ./
RUN yarn install

FROM node:22.10.0-alpine3.19 as runner-dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE ${EXPOSE_PORT}
CMD [ "yarn", "dev" ]