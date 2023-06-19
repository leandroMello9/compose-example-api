FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN yarn
CMD [ "yarn", "dev" ]
