const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const options = {
//     useNewUrlParser: true,
//     reconnectTrues: Number.MAX_VALUE,
//     reconnectInterval: 500,
//     connectTimeoutMS: 10000,
// };

mongoose.connect(url).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log(err);
});
