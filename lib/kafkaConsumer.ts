import { Consumer } from "kafkajs";
import { kafka } from "./kafka";

let consumerInstance : Consumer;

export async function getKafkaConsumer(){
    if(consumerInstance){
        return consumerInstance ;
    }

    const consumer = kafka.consumer({ groupId: "group-nextjs-postgesql"});

    await consumer.connect();
    await consumer.subscribe({topic:"tpc-nextjs-poc", fromBeginning: true});

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) =>{
           const messageValue = message.value?.toString();
           console.log(">>>>>>>> ", messageValue)
           console.log(`[Kafka Consumer] Nova mensagem recebida no tópico ${topic}:`, messageValue);  
        },

    });
    consumerInstance = consumer;
    console.log('[Kafka Consumer] Inicializado e escutando mensagens...');
    return consumerInstance;

}