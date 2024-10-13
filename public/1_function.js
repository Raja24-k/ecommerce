/*function sum(a,b){
    return a+b;
}
console.log(sum(6,23));
console.log(sum(45,66));
// fat arrow function
var result=(a,b)=>{
    console.log("Programer is good skills");
    return console.log(a+b);
    console.log("I am programer");
}
result(50,26);
function caculator(a,b, operator){

    switch(operator){
case"+":
return a+b;
case"-":
return a-b;
case"/":
if(b===0){
    console.log("0 is not allowed");
}
else{
    return (a/b);
}
case"*":
return a*b;
default:
    return "the operator is not found";
    }

}
console.log(caculator(5,23,"+"));
//console.log(caculator(45,0,"/"));*/

// revres strings and check palindrom string 

const reverse=(str)=>{
    let isrevers="";
for(let char=str.length-1;char>=0;char--){
    isrevers=isrevers+str[char];
}
//return isrevers;
return str===isrevers?true: false;
};
console.log(reverse("level"));
