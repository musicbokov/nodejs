####Соберём и запустим этот образ:
1. docker build -t bokovpro/nodejs .
2. docker run --rm -it -p 8080:8080 -d bokovpro/nodejs

####Теперь предположим, что вы хотите, чтобы сборка пересобиралась при каждом изменении кода, то есть во время разработки. Тогда вы должны примонтировать файлы исходного кода в контейнер при запуске и остановки node-сервера.
1. docker run --rm -it -p 8080:8080 -v :/app bokovpro/nodemon bash
2. root@id:/app# nodemon src/server.js

root@id:/app# node src/server.js