import { NextResponse } from "next/server";
import { Kafka } from "kafkajs";
import { getKafkaConsumer } from "@/lib/kafkaConsumer";

const kafka = new Kafka({
    clientId:'poc-nextjs-postgesql',
    brokers:[process.env.KAFKA_BROKER || "localhost:9092"]
});

/**
 * VERBO GET Consumer Kafka
 * @param request 
 * @returns NextResponse
 */
export async function GET(request:Request){
    try{
       await getKafkaConsumer();
      return NextResponse.json({ status: 'Consumer iniciado com sucesso ou já estava rodando.' });
    }catch(error){
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}