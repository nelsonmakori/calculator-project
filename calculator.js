let score ="100";

function displayScores(){
 let scores = document.querySelectorAll('.score');
scores[0].innerHTML = '<p>' + score + '</p>';
}

//displayScores();

function buttons(){
let seven = document.getElementById('seven')
seven.addEventListener('click',displayScores)
}
 buttons()