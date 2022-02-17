const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { consumer } = require('./kafka');
const TypeInvoice = require('./types/invoice');

const main = async () => {
  await consumer.subscribe({ topic: process.env.KAFKA_TOPIC, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        if (topic !== process.env.KAFKA_TOPIC) {
          return;
        }

        const data = JSON.parse(message.value.toString());

        switch (data.type) {
          case 'invoice': {
            return await new TypeInvoice(data.data).run();
          }
        }
      } catch (err) {
        console.log('Error', err);
      }
    }
  })
}

main().catch(console.error);
