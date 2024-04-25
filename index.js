//QUESTIN 1:
//COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER
let obj1={
    name:"person1",
    age : 5
}
// let res=[];
// let key1=Object.keys(obj1);
// let value1= Object.values(obj1);
// for(let i of key1)
// {
//    res.push((`${i} : ${obj1[i]}`))
// }

let obj2={
    age:5,
    name:"person1"
}
// let key2=Object.keys(obj2);
// let value2=Object.values(obj2);
// let res1=[];
// for(let i of key2)
// {
//     res1.push((`${i} : ${obj2[i]}`))
// }
//comparing 2 obj

const samepropertyobjs=function(obj1,obj2)
{
    let obj1keys=Object.keys(obj1);

    if(obj1keys.length===Object.keys(obj2).length)
    {
        return obj1keys.every(key=>obj2.hasOwnProperty(key)&& obj2[key]===obj1[key]);
    };
    return false;
};
// console.log(samepropertyobjs(obj1,obj2));
//output=>true

//QUESTIOM 2
//GIVEN API AND DISPLAY ALL THE COUNTRIES FLAGS

let request= new XMLHttpRequest()
let method ='GET'
let api='https://restcountries.com/v3.1/all'
request.open(method,api)
request.send()

request.onload= function(){
    let data=JSON.parse(request.response);
    console.log(data)
    // 
    for(let i of data)
    {
        // console.log(i["flags"]["png"])
    }

}
//output=>{"png": "https://flagcdn.com/w320/gd.png",


//QUESTION 3:
//USE SAME RESTCOUNTRIES AND PRINT NAMES,SUB-REGION,POPULATION,REGIONS

let request1= new XMLHttpRequest()
let method1='GET'
let api1='https://restcountries.com/v3.1/all'
request1.open(method1,api1)
request1.send()

request1.onload =function(){
    let data=JSON.parse(request1.response)
    {
        // console.log(data);
        // console.log(JSON.stringify(data))
        for(let i of data)
        {
        //   console.log(i["subregion"]) 
        // console.log(i["region"])
        //console.log(i["population"])
        //   console.log(i["name"])
          
        }
    }
    
}