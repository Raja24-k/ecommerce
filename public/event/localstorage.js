// localstorage objects allows you to save key/values pair in the browser
//  localstorage objects store data no expriation date
// local storage save the  data if browser is closed 
// add local stoarage in data to use JSON.stringfy and to get data of local storage use JSON.parse

//localStorage.setItem("rajababaoo","verma");

// Date and time in javascript

const currentdates=new Date();
//console.log(currentdates)
const currentdate=new Date().getTime();// mile seconds
//console.log(currentdate);

// Time based Events 
//setTimeout
function delaytime(){
    console.log("perfoam the task after few seconds");
}
//setTimeout(delaytime,3000);

function show(){
    console.log("welcome to my home");
}
setInterval(show,2000);