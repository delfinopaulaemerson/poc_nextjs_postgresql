import "dotenv/config";
import prisma from "../lib/prisma"

async function testDatabase() {
  
  console.log("🔍 Testing Prisma Postgres connection...\n")  

  try{

    console.log("\n📝 Creating a test user...");
    const newUser = await prisma?.users.create({
        data: {
            nome:"celso delfino meu amor",
            idade: 26,
            email: "celsinho@crak.com.br", 
            senha: "senha@1010"
        },
    });
    console.log("✅ Created user:", newUser);
    console.log("\n🎉 All tests passed! Your database is working perfectly.\n");
  }catch(error){
    console.error("❌ Error:", error)
    process.exit(1)
  }
  
};

testDatabase();