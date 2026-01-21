const bookInput = document.querySelector("#book");
const addBtn = document.querySelector("#add-book");
const bookList = document.querySelector("#book-list");
const bookForm = document.querySelector("#book-form");

// addBtn.addEventListener("click", function () {
//   const book = document.createElement("li");

//   book.textContent = bookInput.value;
//   book.classList.add("book");

//   bookList.appendChild(book);

//   bookInput.value = "";
// });
const books = [];

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("form submitted");

  const book = document.createElement("li");

  book.innerHTML = `
  <p>${bookInput.value}</p>
  <button class="delete-btn bg-red-300 rounded-lg p-3 ml-auto block">Delete me</button>`;

  const deleteBtn = book.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });

  // book.textContent = bookInput.value;
  book.classList.add("book");

  bookList.appendChild(book);

  bookInput.value = "";
});

const traverseDiv = document.querySelector("#traverse");
const traverseBtn = document.querySelector("#traverse button");

traverseBtn.addEventListener("click", function () {
  this.parentElement.style.backgroundColor = "red";
});
