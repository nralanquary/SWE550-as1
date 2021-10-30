#Api 
FROM node:14-alpine

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package.json /srv/app/server

RUN npm install

COPY . /srv/app/server

EXPOSE 5000

CMD [ "npm", "run", "dev" ]