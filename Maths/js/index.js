function myable() {
  
  if (document.getElementById('hel').value == "") {
    
    alert("Please Enter a Number...");
  } else {
    
    document.getElementById('ann').style.display = "block";
        
  }
}

function fun1() {
  // body...
  let it = document.getElementById('hel').value;
  document.getElementById('dfd').innerHTML = "Table of : " + it;

  var a1 = document.getElementById('ans1').innerText = it + " × " + 1 +" = " + it*1;
  
  var a2 = document.getElementById('ans2').innerText = it + " × " + 2 +" = " + it*2;
  
  var a3 = document.getElementById('ans3').innerText = it + " × " + 3 +" = " + it*3;
  
  var a4 = document.getElementById('ans4').innerText = it + " × " + 4 +" = " + it*4;
  
  var a5 = document.getElementById('ans5').innerText = it + " × " + 5 +" = " + it*5;
  
  var a6 = document.getElementById('ans6').innerText = it + " × " + 6 +" = " + it*6;
  
  var a7 = document.getElementById('ans7').innerText = it + " × " + 7 +" = " + it*7;
  
  var a8 = document.getElementById('ans8').innerText = it + " × " + 8 +" = " + it*8;
  
  var a9 = document.getElementById('ans9').innerText = it + " × " + 9 +" = " + it*9;
  
  var a10 = document.getElementById('ans10').innerText = it + " × " + 10 +" = " + it*10;
}














 
  
    
    
    
    
    
    
    
    
function myRcd() {
  
  var asd = document.getElementById('hei2').value;
  
  var azx = document.getElementById('base2').value;
  
  if(asd == "" && azx == "") {
    
    alert("Enter a value in both box");
      
  } else if(asd == "" || azx == "") {
        
    alert("Enter a value in both box");
      
  } else {
    
    document.getElementById('res2').innerText = "Here, the Area of Rectangle = " + asd*azx;
        
  }
}













function myrdd(){
  
  var ad = document.getElementById('height').value;
  
  var ak = document.getElementById('base').value;
  
  if(ad == "" && ak == ""){
    
    alert("Enter a value in both box");
        
  } else if(ak == "" || ad == "") {
    
    alert("Enter a value in both box");
        
  } else {
        
   document.getElementById('res1').innerText = "Here, the Area of Triangle = " + (ad*ak)/2;
        
  }
}












function fun2() {
  // body...
  
  var it2 = document.getElementById('num5').value;
  let pi = document.Math.PI;
  document.getElementById('res4').innerText = it2;
  //var df = document.getElementById('res4').innerText = " The Area of Circle : " + iny * iny * Math.PI;
  
}





function circRa() {
  // body...
  
  if (document.getElementById('num5').value == "") {
    
    alert("Please Enter a Number...");
    
  } else {
    
    document.getElementById('res4').style.display = "block";
    
  }
}











function change() {

  /*var abc1 = document.getElementById('tri').value;
      
  var abc2 = document.getElementById('rec').value;*/

  if(document.getElementById('tri').checked) {
    
    document.getElementById('tria').style.display = "block";
    
    document.getElementById('rect').style.display = "none";
    
    document.getElementById('circ').style.display = "none";
        
  } else if(document.getElementById('rec').checked) {
    
    document.getElementById('rect').style.display = "block";
        
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('circ').style.display = "none";
        
  } else if (document.getElementById('cir').checked) {
        
    document.getElementById('rect').style.display = "none";
        
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('circ').style.display = "block";
    
  } else {
    
    document.getElementById('rect').style.display = "none";
        
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('circ').style.display = "none";
    
  }
  /*
  if (document.getElementById('cir').checked) {
    
    document.getElementById('rect').style.display = "none";
        
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('circ').style.display = "block";
    
  } else {
    
    document.getElementById('rect').style.display = "none";
        
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('circ').style.display = "none";
    
  }
  */
}






function selection() {
  
  var options = document.getElementById('opt').value;
  
  if (options == 1) {
    
    document.getElementById('div1').style.display = "block";
    
    document.getElementById('tria').style.display = "none";
    
    document.getElementById('rect').style.display = "none";
    
    document.getElementById('circ').style.display = "none";
    
  } else {
    
    document.getElementById('div1').style.display = "none";
    
    document.getElementById('ann').style.display = "none";
    
  }
  
  if (options == 2) {
    
    document.getElementById('divAre').style.display = "block";
    
  } else {
    
    document.getElementById('divAre').style.display = "none";
    
  }
  
}








function countdw() {
  // body...
  
  let aww = document.getElementById('count').value;
  
  let results = document.getElementById('res3');
  
  let start = document.getElementById('btn4');
  
  let stop = document.getElementById('btn5');
  
  let timeref;
  
  const showTime = () => {
    timeref = setInterval(() => {
      document.getElementById('res3').innerHTML = aww;
      inpt2++;
    }, 1000);
  }
  start.addEventListener('click', showTime)
}












function tri1(){
  
  document.getElementById('tria').style.display = "block";
      
}