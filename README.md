###Кейс #1
1. npm init -y
2. npm install express
3. docker build -t node-app-image .
4.docker run -v ${PWD}:/app:ro -v /app/node_modules --env-file ./.env -p 3000:4000 -d --name node-app node-app-image
4. docker exec -it node-app bash
5. docker rm node-app -fv
6. npm install nodemon --save-dev
7. docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
8. docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

###Монго
1. create bash
2. mongo -u "bokovpro" -p "bpassword"
