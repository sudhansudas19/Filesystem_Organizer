function helpExecutor(){
    console.log(` List of commands are:
    1. view <dirname> --flat
    2. view <dirname> --tree
    3. organize <dirname> 
    4. help`);
}
module.exports={
    helpExecutor:helpExecutor,
}