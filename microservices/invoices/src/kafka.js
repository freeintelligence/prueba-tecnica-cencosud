const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: process.env.KAFKA_BROKERS.split(',').map(e => e.trim()),
});

const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID });
const producer = kafka.producer();

async function main() {
  await consumer.connect();
  await producer.connect();
}

async function sendMail(emailData) {
  await producer.send({
    topic: process.env.KAFKA_EMAILS_TOPIC,
    messages: [
      { value: JSON.stringify(emailData) }
    ]
  });
}

main().then(() => console.log('Kafka connected!')).catch(err => console.log(err));

module.exports = {
  kafka,
  consumer,
  producer,
  sendMail,
}
