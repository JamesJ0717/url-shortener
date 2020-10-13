FROM node

EXPOSE 80

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD npx next start -p 80