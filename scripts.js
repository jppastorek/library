const buttonNew = document.querySelector(".add-button");
const buttonSubmit = document.querySelector("#submit-button");
const modal = document.querySelector(".modal");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formReadYes = document.querySelector("#read-yes");
const formReadNo = document.querySelector("#read-no");
const container = document.querySelector(".container");
const closeX = document.querySelector(".close");
let myLibrary = [];




///////////////////FUNCTIONS///////////////////////

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    let title = formTitle.value;
    let author = formAuthor.value;
    let pages = formPages.value;
    let read = formReadYes.value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

///////////////////EVENT LISTENERS/////////////////

buttonNew.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeX.addEventListener("click", () => {
    modal.classList.add("hidden");
});

buttonSubmit.addEventListener("click", () => {
    addBook();
    modal.classList.add("hidden");
});