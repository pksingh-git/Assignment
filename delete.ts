import {bookManager} from "./bookManager.js";
//console.log("inside del");

let manager:bookManager= new bookManager();
let delButton :NodeListOf<HTMLButtonElement> = document.querySelectorAll(".bookDelete")! as NodeListOf<HTMLButtonElement>;


delButton.forEach((button)=>{
button.addEventListener("click",(event)=>{
//console.log("adde");


manager.deleteRecord(event.target)
 
});



});