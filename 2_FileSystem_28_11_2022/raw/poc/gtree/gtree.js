let root={
    name:"d10",
    children:[{
        name:"d20",
        children:[{
            name:"d50",
            children:[],
        },{
            name:"d60",
            children:[],
        }]
    },{
        name:"d30",
        children:[]
    },{
        name:"d40",
        children:[]
    }],
}

function gTree(node){
    let meNmyFamily=node.name+"->";
    for(let i=0;i<node.children.length;i++){
        meNmyFamily+=node.children[i].name+",";
    }
    console.log(meNmyFamily);
    for(let i=0;i<node.children.length;i++){
        gTree(node.children[i]);
    }
}

gTree(root);