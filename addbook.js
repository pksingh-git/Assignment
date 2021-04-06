import { bookManager } from "./bookManager.js";
let objManager = new bookManager();
function add() {
    objManager.addBookList();
}
const submit = document.getElementById("sum").addEventListener("click", add);
