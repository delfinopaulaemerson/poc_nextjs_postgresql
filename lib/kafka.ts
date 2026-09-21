import { Kafka,Producer} from "kafkajs";


const globalForKafka = global as unknown as {
    kafkaProducer : Producer | undefined; 
};

const kafka = new Kafka({
    clientId: 'poc-nextjs-postgesql',
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
});

export async function getKafkaProducer(): Promise<Producer> {
    if(!globalForKafka.kafkaProducer){
        const producer = kafka.producer();
        await producer.connect();
        globalForKafka.kafkaProducer = producer;
    }
    return globalForKafka.kafkaProducer;
}