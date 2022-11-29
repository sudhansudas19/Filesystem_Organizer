function fn(){
    console.log("I am called from Lib");
}
let a=10;
let private =2;

module.exports={
    fxn:fn,
    varName:a,
}