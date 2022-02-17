const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);
}

main().then(() => console.log('Database connected!')).catch(err => console.log(err));
