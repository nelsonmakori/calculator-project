

const display = document.getElementById('display')
 function displayNumber(input){
  display.innerText += input ;

 }
 
 function clearAll(){
  display.innerText = "";
 }

 function calculate(){
  display.innerText = eval(display.innerText)
 }

 function deleteNumber(){
  display.innerText = display.innerText.slice(0,-1)
  }



  
  // m+=y
  //m = m + y;

  // nelson += 1000
 // nelson = nelson + 1000;
  //x -= 500
 // x = x - 500;


