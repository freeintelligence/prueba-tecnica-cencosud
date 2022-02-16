const mongoose = require('mongoose');

mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  }
});

async function main() {
  await mongoose.connect('mongodb://localhost:27017/cencosud');
}

main().then(e => console.log('Database connected!')).catch(err => console.log(err));
