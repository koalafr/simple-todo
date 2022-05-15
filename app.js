"use strict";

// Get the input field
const input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard # TODO: fix deprecation
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addTask();
  }
});

const closeBtnTab = document.getElementsByClassName("closeBtn");
for (let i = 0; i < closeBtnTab.length; i++) {
  closeBtnTab[i].addEventListener("click", deleteTask);
}
const doneBtnTab = document.getElementsByClassName("doneBtn");
for (let i = 0; i < doneBtnTab.length; i++) {
  doneBtnTab[i].addEventListener("click", doneTask);
}

// fonction ADD a new task
function addTask() {
  // get input value
  let newTask = document.getElementById("input").value;
  if (!newTask) return;
  console.log("NEW TASK ADDED: " + newTask);
  // create task structure li a a a /li
  let li = document.createElement("li");
  // create done btn
  let doneB = document.createElement("a");
  doneB.textContent = "⌚️";
  doneB.classList.toggle("doneBtn");
  doneB.addEventListener("click", doneTask);
  // create task text
  let txt = document.createElement("p");
  txt.textContent = newTask;
  txt.classList.toggle("todoText");
  // create close btn
  let closeB = document.createElement("a");
  closeB.textContent = "X";
  closeB.classList.toggle("closeBtn");
  closeB.addEventListener("click", deleteTask);
  // populate li
  li.appendChild(doneB);
  li.appendChild(txt);
  li.appendChild(closeB);
  // populate tasklist
  document.getElementById("taskList").appendChild(li);
}

// fonction DONE a task
function doneTask(evt) {
  evt.target.parentNode.classList.toggle("checked");
}

// fonction DELETE a task
function deleteTask(evt) {
  evt.target.parentNode.style.display = "none";
  // parcourir tab, if parentNode.textzone === tab.textzone DELETE
}
