// //CJM
// const { Command } = require('commander');

//ESM
import { Command } from "commander";
const program = new Command();

program.option("-s,--show", "Display Your Information")
    .option("-n, --name <name>", "Your Name")
    .option("-g, --gender <gender>", "Your gender")
    .allowUnknownOption(true);

program.parse();

const options = program.opts();


const user = {
    name: options.name || "Unknown",
    gender: options.gender || "Unknown",
};

const displayUser = () => { 
    console.log("User Information");
    console.log(`Name: ${user.name}`);
    console.log(`Gender: ${user.gender}`);
     
};

if (options.show) {
    displayUser();

}
else { 
    console.warn("\x1B[31m Unknown action type!");
}


