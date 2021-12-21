FROM node:12

#create directory of app
WORKDIR /app

# установка зависимостей
# символ астериск ("*") испоьлзуется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY ../../app/package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY ././app .

# Сервер привязан к 8080 порту, поэтому мы будем использовать инструкцию EXPOSE
# чтобы проинформировать Docker о том, что в контейнере имеется приложение
# прослушивающее этот порт
EXPOSE 8080

CMD [ "node", "server.js"]