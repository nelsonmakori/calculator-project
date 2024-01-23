const display = document.getElementById('display')
 function displayNumber(input){
  display.innerText += input ;

 }
 
 function toa(){
  display.innerText = "";
 }

 function calculate(){
  display.innerText = eval(display.innerText)
 }
// function deleteNumber(input){
//  display.value = display.value.toString().slice(0,-1)
// }

function deleteNumber(input){
  console.log(display.slice)
  console.log(input)
  //display.value -= input
  display.value = display.value - input;

  // display.value += input
  display.value = display.value + input

  // m+=y
  m = m + y;

  // nelson += 1000
  nelson = nelson + 1000;
  //x -= 500
  x = x - 500;

}
const monthlyrRent = 2000;
const yearRent = monthlyrRent * 12;
const  salary = yearRent - 4800;
console.log(yearRent)
console.log(salary)
