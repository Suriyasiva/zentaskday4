// How to compare two JSON have the same properties without order?
// var obj1 =[{ name: "Person 1", age:5 }];
// var obj2 = [{ age:5, name: "Person 1" }];
// console.log(Object.is(obj1,obj2));
// -------------------OR--------------------
// if(obj1.name==obj2.name && obj2.age==obj2.age){
//     console.log("true");

// }else{
//     console.log("false");
// }

// 2.Use the rest countries API url ->https://restcountries.com/v3.1/all and display all the country flags in console

function xmlreq(){
// console.log("greetings");
var xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.responseType="json"
xhr.onload=()=>{
    var countries=xhr.response
    // console.log(countries);
var getflags=(value)=>value.flags
var foo=countries.map(getflags)
console.log(foo);

var getname=(value)=>value.name.common
var foo1=countries.map(getname)
console.log(foo1);

var getregion=(value)=>value.region 
var foo2=countries.map(getregion)
console.log(foo2);

var getsubregion=(value)=>value.subregion 
var foo3=countries.map(getsubregion)
console.log(foo3);

var getpopulation=(value)=>value.population 
var foo4=countries.map(getpopulation)
console.log(foo4);


// subregion
// population
}
}
xmlreq()





