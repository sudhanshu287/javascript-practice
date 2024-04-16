const funct=function(){
    let a=10;
    let b=20;
    const funct1=function(){
        console.log("func1",(a+b))
    }
    console.log("sum ",(a+b));
    console.log(funct1())
} 

console.log(funct());
