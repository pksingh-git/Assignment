"use strict";
let addBookBtn = document.getElementById("addBookLink");
//let addBookBtn1=document.getElementById("addHomeLink")!;
addBookBtn === null || addBookBtn === void 0 ? void 0 : addBookBtn.addEventListener("click", addBooks);
function addBooks() {
    document.getElementById("bookBody").style.display = "none";
    document.getElementById("addBookPage").style.display = "block";
}
let addHomeLink = document.getElementById("addHomeLink");
addHomeLink.addEventListener("click", () => {
    document.getElementById("bookBody").style.display = "block";
    document.getElementById("addBookPage").style.display = "none";
});
