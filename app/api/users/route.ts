import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/**
 * VERBO GET FINDALL 
 * @param request 
 * @returns user[]
 */
export async function GET(request:NextRequest){
    try{
        const users = await prisma.users.findMany();
        return NextResponse.json(users);

    }catch(error){
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
     
}

/**
 * VEBO POST CREATE
 * @param request 
 * @returns users
 */
export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const user = await prisma.users.create({
            data : {
                nome: body.nome,
                idade:body.idade,
                email:body.email,
                senha:body.senha,

            }, 
        });
        return NextResponse.json(user, {status: 201});
    }catch(error){
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
    
}