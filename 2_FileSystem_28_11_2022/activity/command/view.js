let fs=require("fs");
let path=require("path");


function isFileChecker(dir){
    return fs.lstatSync(dir).isFile();
}
function isDirectoryChecker(dir){
    return fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
}
function readContent(dir){
    return fs.readdirSync(dir);
}
function viewExecutor(dir,viewtype){
    if(viewtype=="--flat"){
        viewFlat(dir);
    }
    if(viewtype=="--tree"){
        viewTree(dir,"");
    }
}

function viewFlat(dirPath){
    //let isFile = isFileChecker(dirPath);
    let dirChecker=isDirectoryChecker(dirPath);
    if(dirChecker==true){
        console.log(dirPath);
        let children=readContent(dirPath);
        for(let i=0;i<children.length;i++){
            viewFlat(path.join(dirPath,children[i]));
        }
    }else{
        console.log(dirPath+"*");
        
    }
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

module.exports={
    viewExecutor:viewExecutor,
}


