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
viewFlat("d10");