const buttonNew = document.querySelector(".add-button");
const buttonSubmit = document.querySelector("#submit-button");
const modal = document.querySelector(".modal");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const checkedYes = document.querySelector("#read");
const container = document.querySelector(".container");
const bookContainer = document.querySelector(".book-container");
const closeX = document.querySelector(".close");
let myLibrary = [];
// const removeX = document.createElement("span");




///////////////////FUNCTIONS///////////////////////



class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function displayBooks() {
    bookContainer.innerHTML = "";
    let index = 0;
    myLibrary.forEach((book) => {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let h2title = document.createElement("h2");
        let h4author = document.createElement("h4");
        let h4pages = document.createElement("h4");
        let removeX = document.createElement("span");
        let markButton = document.createElement("button");
        div.setAttribute('data', index);
        markButton.innerText = "Mark as read";
        removeX.classList.add("remove");
        removeX.innerHTML = "&times;";
        h2title.innerText = `"${book.title}"`;
        h4author.innerText = book.author;
        h4pages.innerText = `${book.pages} pages`;
        div.classList.add("card");
        div2.classList.add("remove-container")
        if (book.read) {
            markButton.classList.add("read");
            markButton.innerText = "Mark as unread";
        } else {
            markButton.classList.add("unread");
            markButton.innerText = "Mark as read";
        }
        bookContainer.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(removeX);
        div.appendChild(h2title);
        div.appendChild(h4author);
        div.appendChild(h4pages);
        div.appendChild(markButton);
        markButton.addEventListener("click", () => {
            if (markButton.classList.contains("read")) {
                markButton.classList.remove("read");
                markButton.classList.add("unread");
                markButton.innerText = "Mark as read";
            } else if (markButton.classList.contains("unread")) {
                markButton.classList.remove("unread");
                markButton.classList.add("read");
                markButton.innerText = "Mark as unread";
            }
        })
        removeX.addEventListener("click", (book) => {
            if (confirm("Are you sure you want to remove this book?") === true) {
                myLibrary.splice(div.getAttribute('data'), 1);
                displayBooks();
            };
        })
        index++;
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
    // addBook();
    let book = new Book(formTitle.value, formAuthor.value, formPages.value, checkedYes.checked);
    myLibrary.push(book);
    modal.classList.add("hidden");
    displayBooks();
});