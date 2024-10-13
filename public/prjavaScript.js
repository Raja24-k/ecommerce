/*function foo(){
    return
    {
        name:"rahul"
    }
}

console.log(foo());
console.log(1+ + "2" +"2");
// sort the array 
var a=0;
function b(){
    a=10;
    return ;
    var a= function (){

    }

}
b();
console.log(a);
let data=[12,23,5,14,34,68];
data.sort((a,b)=>{return a-b;});
console.log(data);
// find duplcate in array
const arr=[14,25,56,23,14,25,9];
const duplicate=arr.filter((ele,index,array)=>array.indexOf(ele)!==index);
const countduplicate=arr.reduce((obj,arra)=>{
    if(obj[arra]==undefined){
        obj[arra]=1;
        return obj;
    }
    else{
        obj[arra]++;
        return obj;

    }
},{});
console.log(duplicate);
console.log(countduplicate);
// revsere string
var str="life is struggle not a borring";
var restr=str.split(" ").map(function(word){
    return word.split("").reverse().join("") 
})
console.log(restr.join(" "));

var st="rajababooverma";
var sty=st.split("").reverse();
console.log(sty.join(" "));

 console.log(Array.isArray([2]));
console.log(Array.isArray(2));

var arr=[1,2,5,6];
console.log(arr);
arr.length=0;
console.log(arr);
// given number integer or not
var a=10.2;
if(a%1===0){
    console.log("Integer");
}
else{
    console.log("Not Integer");
}
// show alphavictaly order
var str="rajababoo";
var alphavictallyorder=str.split("").sort().join("");
console.log(alphavictallyorder);
// upperletter to each words
function captialfirst(str){
 var newwords=str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase()+word.substring(1)
 })
return newwords.join(" ");
}
console.log(captialfirst("tum ho ki nhi"));
// add element 
var arr=[1,2,3,56,8];
var sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
// count each char
function occ(str){
    var occurance={};
        str.split("").forEach(function(elem){
            if(occurance.hasOwnProperty(elem)===false){
                occurance[elem]=1;
            }
            else{
                occurance[elem]++;
            }
        })
        return occurance;
}
console.log(occ("rajababoo"));
// add number in array 
var arry=["knjbjb",45,"jbbu",23,"oinjui"];
var su=0;
arry.forEach(function(ele){
    if(typeof ele==="number"){
su=su+ele;
    }
})
console.log(su);  */

