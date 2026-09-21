import { NextResponse } from "next/server";
import { getKafkaProducer } from "@/lib/kafka";

/**
 * verbo POST - Producer apache Kafka  
 * @param request 
 * @returns NextResponse
 */
export async function POST(request:Request) {
    try{
        const body = await request.json();
        const message = body;
        const producer = await getKafkaProducer();
        console.log(">>>>>>>> producer", producer);
        await producer.send({
            topic:'tpc-nextjs-poc',
            messages:[
                {
                  key: null,
                  value: JSON.stringify(message)      
                },
            ],
        });

        return NextResponse.json({success: true, message:'Event streamed to Kafka successfully.'}); 

    }catch(error:any){
        console.error('Kafka production error:', error)
        return NextResponse.json({success: false, error: error.message },{status:500});
    }
    
}