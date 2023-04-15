//function expression
// means create a function and put in into the variable
/*function sum(a, b) {
  
  var total = a + b;
  console.log(total);
  
}*/
//var funExp = sum(4, 6);
//funExp;

//---------------------------------------

//return type
/*function sum(a, b) {
  
  return total = a+b;
  
}
var funExp = sum(4, 6);
console.log(funExp);*/

//autonomous 
/*var a = function(a, b) {
  return total = a+b;
  // body...
}
console.log(a(10, 20));*/

//var = function scope
//let & const = block scope

// fat function
/*
let a1 = () => {
  
  let as = 5, ad = 7;
  let sum = as + ad;
  
  
}
*/

//var a = ["adi", "vinod", "pradeep"];
//console.log(a);

/*
for (var b in a) {
  console.log(b);
}*/
/*for (var c of a) {
  console.log(c);
}*/

//we cannot use break function in foreach function

/*a.forEach(function (element, index, array){
  console.log(element + " index : " + index);
});*/

/*
var upd = a.splice(a,1);
console.log(a); 

let b = [25, 36,49];
console.log(b);

let bsqr = b.map(curElem) => {
  return Math.sqrt(curElem);
} */

/*let c = [34, 57, 78];
let sum = c.reduce((accumulator, curEle, index, arr) => {
  return accumulator += curEle;
})
console.log(sum);

let d = new String("adi");
console.log(d); */

let e = "Hello World";
//console.log(e);
//console.log(e.indexOf("o"));
//console.log(e.indexOf("l", 4));
//console.log(e.lastIndexOf("d"));

//console.log(e.search("o"));

//console.log(e.slice(4));
//console.log(e.slice(4,7));
//console.log(e.slice(2, -2));

//console.log(e.substring(0,4));

//console.log(e.replace("World", "Aditya"));




/*
function fun1() {
  // body...
  document.getElementById('demo').style.display = "block";
  var a = document.getElementById('num').value;
  document.getElementById('p1').innerText = a;
  
}*/


function time() {
  var num = document.getElementById('num').value;
  var hour = null;
  var minute = num;
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = hour + " : " + minute + " : " + sec;
    sec--;
    if (num => 60) {
      hour = 1;
      minute = num - 60;
    }
    if (minute == 00) {
      hour --;
      minute = 60;
    }
    if (sec == 00) {
      minute --;
      sec = 60;
    }
     
    
  }, 1000);
}

