// compare two objects 

let obj1={ name : "dhoni" , age : 42};
let obj2={age : 42 , name : "dhoni"};
const a=function(obj1,obj2){
    let p1=Object.keys(obj1);
    if(p1.length===Object.keys(obj2).length)
    {
        return p1.every(keys=>obj2.hasOwnProperty(keys)&&obj2[keys]==obj1[keys]);
    }
    return ;
}
console.log(a(obj1,obj2));