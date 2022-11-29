let fs=require("fs");
let path= require("path");


function isFileChecker(dir){
    return fs.lstatSync(dir).isFile();
}

function readContent(dir){
    return fs.readdirSync(dir);
}
function viewTree(dirPath,indent){
let isFile=isFileChecker(dirPath);
if(isFile==true){
    console.log(indent,path.basename(dirPath));
}else{
    console.log(indent,path.basename(dirPath));
    let children=readContent(dirPath);
    for(let i=0;i<children.length;i++){
        viewTree(path.join(dirPath,children[i]),indent+"\t");
    }
}
}
viewTree("d10","");