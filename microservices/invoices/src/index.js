const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
require('./database');
const { consumer, producer, sendMail } = require('./kafka');
const { Invoice } = require('./models/Invoice');

const main = async () => {
  await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        if (topic !== process.env.KAFKA_TOPIC) {
          return;
        }

        const data = JSON.parse(message.value.toString());
        const document = new Invoice(data);
        await document.save();

        await sendMail({
          type: 'invoice',
          data,
        });
      } catch (err) {
        console.log('Error', err);
      }
    }
  })
}

main().catch(console.error);
