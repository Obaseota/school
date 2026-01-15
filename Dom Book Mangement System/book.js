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

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("form submitted");

  const book = document.createElement("li");

  book.textContent = bookInput.value;
  book.classList.add("book");

  bookList.appendChild(book);

  bookInput.value = "";
});
