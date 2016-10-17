FROM node:6.6.0-wheezy

MAINTAINER Eric Dela Cruz <eric@naguras.com>

RUN apt-get update &&\
   apt-get install -y libgtk2.0-0 libgconf-2-4 \
   libasound2 libxtst6 libxss1 libnss3 xvfb

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/
COPY ./brokers /usr/src/app/
COPY ./24O.html /usr/src/app/
COPY ./app.js /usr/src/app/
COPY ./brokers.json /usr/src/app/
COPY ./main.js /usr/src/app/

RUN npm install 

CMD Xvfb -ac -screen scrn 1280x2000x24 :9.0 & export DISPLAY=:9.0 && npm start
