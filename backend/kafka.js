const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: process.env.KAFKA_BROKERS.split(',').map(e => e.trim()),
});

const producer = kafka.producer();

async function main() {
  await producer.connect();
}

main().then(() => console.log('Kafka connected!')).catch(err => console.log(err));

module.exports = {
  kafka,
  producer,
}
