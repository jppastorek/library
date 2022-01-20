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
}

function displayBooks() {
    myLibrary.forEach((book) => {
        let div = document.createElement("div");
        let h2title = document.createElement("h2");
        let h4author = document.createElement("h4");
        let h4pages = document.createElement("h4");
        let removeX = document.createElement("span");
        removeX.classList.add("remove");
        removeX.innerHTML = "&times;";
        // removeX.addEventListener("click", () => {
        //     myLibrary.
        // })
        h2title.innerText = `"${book.title}"`;
        h4author.innerText = book.author;
        h4pages.innerText = `${book.pages} pages`;
        div.classList.add("card");
        if (book.read === "yes") {
            div.classList.add("read");
        } else {
            div.classList.add("unread");
        }
        container.appendChild(div);
        div.appendChild(removeX);
        div.appendChild(h2title);
        div.appendChild(h4author);
        div.appendChild(h4pages);
    })

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
    displayBooks();
});