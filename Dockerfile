FROM node:14.17.4

WORKDIR /app

COPY . .

RUN npm install
RUN npx roboter build

EXPOSE 8080
CMD node build/server.js