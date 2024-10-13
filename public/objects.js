// objects
let person={
    name:"Rajababo",
    id:12,
    Gender:"Male",
    "is student":false
}
//console.log(person.name);//acces the proerties
//console.log(person[`is student`]);

//add properties

person.age=26;
person.id=10;
//console.log(person);

//pass by value and pass by reference 
/* pass by value mean if give the value in person the person is not changed orginal value
but pass by reference mean person changed the orginal value */

// This keyword

//synchronus code

const fun2=()=>{
    console.log("welcome to home");
};

const fun1=()=>{
    console.log("welcome to my room");
    fun2();
    console.log("welcome to party");
};
//fun1();

// Asynchronus code
const fun3=()=>{
   setTimeout(()=>{ console.log("welcome to home");
    
   },2000);
};

const fun4=()=>{
    console.log("welcome to my room");
    fun3();
    console.log("welcome to party");
};
//fun4();

//hosting in javascript
/* hoisting is javascript mechanism where variables and function declarations are moved
to top of their scope before code execution
but let and const keywords not used hoisting and fat arrow function is not follow hoisting  */
//console.log(value);
greet();

var value=10;
 function greet(){
   // console.log("welcome to my field boys");
}

// lexical and Scope chaning
/* lexical scoping in javascript is like a set of rule that determines where varible can be used
in your code. it follows the like function or block scope 
 */
/* Scope chaining
Global scope , function Scope and block scope
If declare the varible in block scope that can accse only block scope members but if 
declare the varible in Global scope any one acces if declare the varible function scope 
that can acces block scope and function scope members
 
 /*
  Closure
  A cloosure is created when inner function has acces to the varibales of its outer functio
  even after function has finshed execution;
*/

function mutiper(factor){
    return function(number){
        console.log(number,factor);
        return number*factor;
    }
}
//const double=mutiper(2);
//console.log(double(5));

//Destruturing Arrays

/*const arr=[10,20,30];
const [first,second,thrid]=arr;
//console.log(first,second);

let a=10;
let b=20;
[a,b]=[b,a]
//console.log(a,b);

//sprade oprateor ...
const num1=[1,5,6,3];
const num2=[2,4,9,7];
const newarr=[...num1,...num2];
//console.log(newarr);
//add elemnts in array
const friuts=["mango","banan","apple"];
friuts.push(...["orange","grappes"]);
console.log(friuts);
const newa="Rajababo";
console.log([...newa]);*/


//first class function
// A first class function means that function can treated as values, assinsed to varabiles
//and pass around as arguments

/* Higher order function is a function that take one or more function as arguments
or return function as or result */

/* Callback function is a function passed as arguments another function and exectued after 
 the completion of a task  */

 //Examles

 const mathopertion=(a,b,operation)=>{
    return operation(a,b);

 };
 const add=(a,b)=>{
return a+b;
 }
 const sub=(a,b)=>{
    return b-a;
 }
 //console.log(mathopertion(5,14,add));
// console.log(mathopertion(5,52,sub));

/* Callback hell
 callback hell,also known as the pyramid of Doom,refer to a situation in asynchronus javascript
  programing where mutiple nested callbacks are used to handle asynchrouns operations */

  /*const studentdata=()=>{
setTimeout(()=>{
    console.log("I am rajababoo");
    setTimeout(()=>{
        console.log("my home town Gonda");
        setTimeout(()=>{
            console.log("I am done b.tech 2020");
        },1000);
      },1000);
    },1000);
  };
  studentdata();
  
  const data=()=>{
    console.log("axsbd");
  }
  data();*/

  // Promises in javascript
  // A promise is like placeholder for result an asynchrouns operation

  /*const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("I miss you");
    },2000);
  }).then((res)=>{
    console.log(res);
  }).catch((error)=>{
    console.log(error);
  }).finally(()=>{
    console.log("we all mise you dear");
  });*/

  // async and await
  /*async and await in javascript keywords introduced in Ecma 2017 that make
   asynchronous code look like behave more like synchronous  code, make it easier
   to read ,write  */
  
