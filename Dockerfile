FROM node:14.15.4

WORKDIR /usr/local/src
COPY . .
RUN npm i

CMD npm start
