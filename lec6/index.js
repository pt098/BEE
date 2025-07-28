function starter(cb){
    console.log("Starter Order");
    setTimeout(()=>{
        console.log("starter Served");
        cb(sweets);
    },1000)
}


function maincourse(cb){
    console.log("maincourse order");
    setTimeout()

}

let bankBalance=10;

function buyProduct(product_Name,cb){


    for(let i=0;i<products.length;i++){
        if(products[i].name==product_Name){
            return cb(null,products[i].price)
        }
    }
    cb("no Product Found",null);
}
