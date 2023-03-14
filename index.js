"use strict";
let userNumber = Number(document.querySelector("#entry").value);
console.log(userNumber);

let score = 20;
let highscore=0
const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
console.log(document.querySelector("#entry").value);
let hscore = document.querySelector("#hscore");

function display(user1) {
  return (document.querySelector(".absolute").textContent = user1);
}

document.querySelector("#checkbutton").addEventListener("click", function () {
  display(number);
  let userNumber = Number(document.querySelector("#entry").value);
  let para1 = document.querySelector("#para1");
  if (!userNumber) {
    para1.textContent = "❌ No number!";
    display("?");
    document.querySelector("body").style.backgroundColor = "#ee0c0c";
    document.querySelector("#para1").style.color = "#000";
    document.querySelector("#score").textContent = "score:0";
    document.querySelector("#score").style.backgroundColor = "#000";
  } else if (userNumber === number) {
    display(number);
    document.querySelector("body").style.backgroundColor = "#76e606";
    para1.textContent = "✴✴BOOM✴✴ YOU WIN";
    document.querySelector("#para1").style.color = "#ee0c0c"
      document.querySelector("#mainscore").textContent = "&{score}";
    score++;
    document.querySelector("#mainscore").textContent = score;
  if (score>highscore){
    highscore=score
    hscore.textContent=highscore
  }
} else if (userNumber > number) {
    if (score > 1) {
      display("?");
      para1.textContent = "❓❔❓too high😋try again";
      document.querySelector("#para1").style.color = "#ee0c0c";
      score--;
      document.querySelector("#mainscore").textContent = score;
    } 
    else {
      document.querySelector("#mainscore").textContent = score;
      para1.textContent = "you lost the game 🤦‍♀️🤦‍♂️ "
        document.querySelector("#mainscore")
      .textContent = 0;
    }
  } else if (userNumber < number) {
    if (score > 1) {
      display("?");
      para1.textContent = "too low😁😂 try again";
      document.querySelector("#para1").style.color = "#ee0c0c";
      score--;
      document.querySelector("#mainscore").textContent = score;
    } else {
      para1.textContent = "you lost the game 🤦‍♀️🤦‍♂️ "
        document.querySelector("#mainscore")
      .textContent = 0;
    }
  }
});


document.querySelector("#again").addEventListener("click", function () {
    display('?');
    let userNumber = Number(document.querySelector("#entry").value);
  let para1 = document.querySelector("#para1");
  document.querySelector("#entry").value=''
    para1.textContent = "start guessing ...";
    display("?");
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector("#para1").style.color = "#fff";
    document.querySelector("#score").textContent = "score:20";



})