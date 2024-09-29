FROM node:16-alpine as builder

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN npm install -g serve

EXPOSE 3005

CMD ["serve", "-s", "-l", "3005", "/app/build"]

