#!/usr/bin/env node
let viewObj=require('./command/view');
let organizeObj=require('./command/organize');
let helpObj=require('./command/help');

let input=process.argv.slice(2);
let cmd=input[0];
let input1=input[1];
switch(cmd){
    case "view":
        viewObj.viewExecutor(input1,input[2]);
        break;
    case "organize":
        organizeObj.organizeExecutor(input1);
        break;
    case "help":
       helpObj.helpExecutor();
        break;
    default:
            console.log("default command is selected");

}