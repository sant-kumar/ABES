import fs from "fs";
//create a file(sync)
const syncWriter = () => fs.writeFileSync("./data.csv","This is sync file");

//read file(sync)
const syncReader  = () => {
const fileData = fs.readFileSync("./data.csv","utf-8");
console.log(fileData);
}

//append file(sync)
const syncAppend = () => fs.appendFileSync("./data.csv","\nThis is the new line");

//delete the fle(sync)
//const syncDelete = () => fs.unlinkSync("./data.csv");
syncWriter();
syncReader();
syncAppend();
//syncDelete();

export default {syncWriter,syncReader, syncAppend};