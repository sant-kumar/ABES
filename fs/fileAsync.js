import fs from "fs/promises";
//promises have 3 states 1- whether it is pending 2-fulfill 3- not full fill
//async writer function
const asyncWriter = async()=>{
    try{
        await fs.writeFile("./dataAsync.csv","This is the async file.");
        console.log("File has been written successfully");
    } catch(error) {
        console.log("Unable to write",error);       
    }
}

//async reader function
const asyncReader = async()=>{
    try{
        const fileData = await fs.readFile("./dataAsync.csv","utf-8");
        console.log(fileData);
        console.log("File has been successfully read");
    } catch(error) {
        console.log("Unable to read",error);       
    }
}


asyncWriter();
asyncReader();

export default {asyncWriter,asyncReader};