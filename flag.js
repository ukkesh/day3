let request= new XMLHttpRequest()
let a='GET'
let URL='https://restcountries.com/v3.1/all'
request.open(a, URL)
request.send()
request.onload=function(){
    let c=JSON.parse(request.response);
    console.log(c);
    for(let i of c)
    {
        console.log(i["flags"["png"]]);
    }
}