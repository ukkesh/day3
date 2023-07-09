let req = new XMLHttpRequest()
let a1='GET'
let URL1= 'https://restcountries.com/v3.1/all'
req.open(a1,URL1)
req.send()
req.onload=function()
{
    let c=JSON.parse(req.response)
    {
        console.log(c);
        console.log(JSON.stringify(c));
        for(let i of c)
        {
            console.log(i["name"]);
            console.log(i["population"]);
            console.log(i["reigon"]);
            console.log(i["subregion"];)

        }
    }
}
