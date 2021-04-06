import { bookManager } from "./bookManager.js";
//console.log("inside del");
let manager = new bookManager();
let delButton = document.querySelectorAll(".bookDelete");
delButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        //console.log("adde");
        manager.deleteRecord(event.target);
    });
});
