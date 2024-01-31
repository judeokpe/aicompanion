const {PrismaClient} = require("@prisma/client");

const db = new PrismaClient();

async function main(){
    try{
        await db.category.createMany({
            data:[
                {name: "General Knowledge"},
                {name: "Physics"},
                {name: "Chemistry"},
                {name: "Biology"},
                {name: "Economics"},
                {name: "Mathematics"},
                {name: "English Language"},
                {name: "Fine and Applied Art"},
            ]
        })
    } catch (error){
        console.log(error)
    }finally{
        await db.$disconnect();
    };
    
};
main();