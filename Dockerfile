FROM node:8.11-alpine

RUN mkdir -p /app

COPY ./ /app

WORKDIR /app

RUN npm i

# CMD ["node","bin/www"]

CMD node bin/www

EXPOSE 3000
