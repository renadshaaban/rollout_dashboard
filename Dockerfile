FROM node:7.9.0

ADD . /code/backend
WORKDIR /code/backend
RUN npm install --global 

EXPOSE 3000