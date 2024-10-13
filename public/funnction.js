// function is reusable block of code that perfoam certain operations

const { r, t } = require("tar");

/*function sum(a,b){
    return a+b;
}

console.log(sum(45,26));
console.log(sum(23,12));

// function calling or invocation

function greet(){
    console.log("I am good  coder");
}
greet();

function welcome( name){
    console.log("Hello "  + name+ " welcome to my home ");
}
welcome("raja");
welcome("Ankit");

// function exeprssion 

 let result=function add(a,b){
console.log(a+b);
}
result(10,23);

//  an Anonyums function is function without any name

let results=function(a,b){
    console.log(a-b);
}
results(45,23);*/

// ES6 let and const,template string, default arguments
// arrow function,destructring,

/* let and const
  let keywords is blocke scope and that are mutable like its reassigned
  const keywords are block scope but that are immutable its value are not changed
   */
// template string

/*let age=50;
let message=`I am ${age} year old man`;
console.log(message);


// fat arrow function is declare without return keyword in single code is without {}

const sum=(a,b)=>
a+b;

console.log(sum(12,36));

//witout parmetrs passing
const greet=()=>
    console.log("welcome to my world ");
greet();

function calculator(a,b,operator){
    let result;
    switch(operator){
        case "+":
            result= a+b;
            return result;
            
            case "-":
                result=a-b;
                return result;
        
    }
    
}
console.log(calculator(15,26,"+"));
console.log(calculator(56,25,"-"));
// reverse string
const reverse=(str)=>{
    let isreverse="";
for(let i=str.length-1;i>=0;i--){
isreverse=isreverse+str[i];
}
return isreverse;
};
console.log(reverse("raja baboo"));


// check is string is palindrom

const ispalindrom=(str)=>{
    let reverse="";
    for(let j=str.length-1;j>=0;j--){
       reverse=reverse+str[j];
    }
       if(str===reverse){
        return true;
       }
       else{
        return false;
       }
    

};
console.log(ispalindrom("sdsmkwldnwlef"));
console.log(ispalindrom("lalal"));

// Array  start 
//let arr=[];
//console.log(typeof arr);

let arry=[45,26,23,89];

//console.log(arry[1]);
for(let i=0;i<arry.length;i++){
    console.log(arry[i]);
}
//for of loop used show the values
let arr=["raja","rahul","ram","rohit"];
for(item of arr){
   // console.log(item);
}

//for in loop show the index number
for(index in arr){
  //  console.log(index);
}

//for Each loop not return any values
arr.forEach((curele,index,arr)=>{
   // console.log(`${curele} ${index}`);
   // console.log(arr);

})
// map return the values
arr.map((curele,index,arr)=>{
    console.log(`${curele} ${index}`);

})

let ar=[2,4,6,8,10];
ar.forEach((cur,index,ar)=>{
    console.log(cur*2);
})
 const raja =ar.map((cur,index,ar)=>{
return cur*2;
})
console.log(raja);
// for Each used to perfom task of values and map is used from the task and created a new arrays

//push methoad is used to add the in array
let arr=[1,2,3,4,5,6,7,8,9,10,12];
arr.push(78);
console.log(arr);
 //pop is used to remove the data last
 console.log(arr.pop());
// filter methods
const newarr=arr.filter((curele)=>{
    return curele>5;
})
console.log(newarr);
// square of each element
const newar=arr.map((curle)=>{
    return curle*curle;
});
console.log(newar);
// square of even numbers
const newnumbers=arr.map((cur)=>{
    if(cur%2===0){
        return cur*cur;
    }
}).filter((cur)=>cur!==undefined);
console.log(newnumbers);

//reduce
const total=arr.reduce((accum,curn)=>{
    return accum+curn;
},0);
console.log(total);*/

// String start
//index of methoads used searching charters and case sensiative

let str="Raja baboo verma";
//console.log(str.indexOf("Babo"));

// chang string to array
let straar=Array.from(str);
//console.log(straar);

//find the position of word
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
// program to print a to z
for(let i=97;i<=122;i++){
   // console.log(String.fromCharCode(i));
}





