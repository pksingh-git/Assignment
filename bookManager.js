var _a;
let array = localStorage.getItem("bookList");
if (!array) {
    array = [];
}
else {
    array = JSON.parse(array);
}
export class bookManager {
    constructor() { }
    deleteRecord(del) {
        //console.log("inside");
        array.splice(del.id, 1);
        localStorage.setItem("bookList", JSON.stringify(array));
        location.href = "main.html";
    }
    addBookList() {
        let id1 = document.getElementById("iName").value; // as HTMLInputElement
        console.log(id1);
        let title = document.getElementById("tName").value;
        let author = document.getElementById("aName").value;
        let rating = document.getElementById("rName").value;
        if (id1 !== "" && title !== "" && author !== "" && rating !== "") {
            let Book = {
                id: id1,
                title: title,
                author: author,
                rating: rating
            };
            array.push(Book);
            localStorage.setItem("bookList", JSON.stringify(array));
            alert("successfully uploaded");
        }
        else {
            alert("fill all data");
        }
    }
    displayBookList() {
        for (let i = 0; i < array.length; i++) {
            let row = document.getElementById("table1");
            if (row) {
                row.innerHTML += `<tr> <td> ${array[i].id} </td>
                        <td>${array[i].title}</td>
                        <td>${array[i].author}</td>
                        <td>${array[i].rating}</td>
                    <td> <button class="bookDelete" id="${i}"> <i class="far fa-trash-alt"></i> </button>   </td>
                     
         </tr>`;
            }
        }
    }
    search() {
        count++;
        let input = document.getElementById('searchBooks');
        //console.log(input.value);
        var table = document.getElementById('table1');
        //console.log(table);
        let selection = document.getElementById('selection');
        // console.log(selection.value);
        let options = selection.value;
        //  console.log(options);
        if (count > 0) {
            count = 0;
            store.clearFields();
        }
        if (options == "id") {
            for (let v of array) {
                // console.log(v.id+' '+v.author)
                // console.log(v.title);
                // console.log(r);
                // console.log(input.value);
                // console.log(`${v.id}`);
                // console.log(`${v.title}`);
                // console.log(`${v.author}`)
                // console.log(`${v.rating}`);
                if ((input.value) == v.id) {
                    var row = `<tr>

                        <td>${v.id}</td>
                        <td>${v.title}</td>
                        <td>${v.author}</td>
                        <td>${v.rating}</td>
                        
                        </tr>`;
                    table.innerHTML += row;
                }
            }
        }
        else if (options == "title") {
            for (let v of array) {
                // console.log(v.id+' '+v.author)
                // console.log(v.title);
                // let r=v.value;
                // console.log(r);
                //console.log(input.value);
                if ((input.value) == v.title) {
                    var row = `<tr>

                        <td>${v.id}</td>
                        <td>${v.title}</td>
                        <td>${v.author}</td>
                        <td>${v.rating}</td>
                        
                        </tr>`;
                    table.innerHTML += row;
                }
            }
        }
        else if (options == "author") {
            for (let v of array) {
                // console.log(v.id+' '+v.author)
                // console.log(v.title);
                // let r=v.value;
                // console.log(r);
                //console.log(input.value);
                if ((input.value) == v.author) {
                    var row = `<tr>

                        <td>${v.id}</td>
                        <td>${v.title}</td>
                        <td>${v.author}</td>
                        <td>${v.rating}</td>
                        
                        </tr>`;
                    table.innerHTML += row;
                }
            }
        }
        else if (options == "rating") {
            for (let v of array) {
                // console.log(v.id+' '+v.author)
                // console.log(v.title);
                // let r=v.value;
                // console.log(r);
                //console.log(input.value);
                if ((input.value) == v.rating) {
                    var row = `<tr>

                        <td>${v.id}</td>
                        <td>${v.title}</td>
                        <td>${v.author}</td>
                        <td>${v.rating}</td>
                        
                        </tr>`;
                    table.innerHTML += row;
                }
                if (count > 0) {
                    count = 0;
                    store.clearFields();
                }
            }
        }
    }
}
let searchBtn = new bookManager();
let result = (_a = document.getElementById("btn1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", search1); // object is possibly null so i use ? ,optional
function search1() {
    searchBtn.search();
}
let table = document.getElementById("table1");
let count = 0;
class store {
    static clearFields() {
        table.innerText = "";
        // table = null;
    }
}
