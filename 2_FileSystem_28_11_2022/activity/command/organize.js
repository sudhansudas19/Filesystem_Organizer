`1. go to location and check Organized_folder exits or not
 2. if not create Organized_folder
 3. check it is file or folder
 4. if file check the extension and copy in respective field
 5. if folder traverse folder inside it`

 let types={
    media:["mpg","mpeg","mp4","m4v","m4p","ogv","ogg","mov"],
    archives:["zip","7z","rar","tar","iso","ar"],
    documents:["docx","doc","pdf","xls","ods","odt","odf","odg","txt"],
    app:["exe","dmg","pkg","deb"],
    pictures:["tif","tiff","bmp","jpg","jpeg","gif","png","eps","raw"]
}
//let typeObj=require('./utility');
let fs=require('fs');
let path=require('path');

function isFileorNot(src){
    return fs.lstatSync(src).isFile(); 
}

function readContent(dir){
    return fs.readdirSync(dir);
}
function checkExtension(src){
    let ext=src.split(".").pop();
    for(let type in types){
        for(let i=0;i<types[type].length;i++){
            if(ext==types[type][i])
                return type;
        }
    }
    return "others";
}
function sendFile(src,dest,folderName){
    let folderToMake=path.join(dest,folderName);
    if(!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    let pathofDestFile=path.join(folderToMake,path.basename(src));
    fs.copyFileSync(src,pathofDestFile);
}
function organizeExecutor(src){
    let folderToMake=path.join(src,"Organized_folder");

    if(!fs.existsSync(folderToMake)){
        fs.mkdirSync(folderToMake);
    }
    organize(src,folderToMake);
}
function organize(src,dest){
    let isFile=isFileorNot(src);
    if(isFile){
            console.log(src,dest);
            let folderName=checkExtension(src);
            sendFile(src,dest,folderName);

    }else{
        let fDirnames=readContent(src);
        for(let i=0;i<fDirnames.length;i++){
            let child=fDirnames[i];
            let dirNamePath=path.join(src,child);
            organize(dirNamePath,dest);
        }
    }

}

module.exports={
    organizeExecutor:organizeExecutor,
}