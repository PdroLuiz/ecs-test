FROM node:alpine


WORKDIR /app

COPY package.json /app/ 
COPY index.js /app/
COPY .env /app/

RUN yarn install


EXPOSE ${PORT}


CMD ["node", "index.js"]