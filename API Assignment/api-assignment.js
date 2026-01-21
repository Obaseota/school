const essentials = document.querySelector(".essentials");

const getEssentials = function () {
  fetch("https://dummyjson.com/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.products.map(function (essential) {
        const essentialDiv = document.createElement("div");
        essentialDiv.innerHTML = `
            
        <img src=${essential.thumbnail} >
        <h1>${essential.title}</h1>
        <h2>${essential.price}</h2>
        <h2>${essential.brand}</h2>
        <h2>${essential.category}</h2>
            `;

        essentials.appendChild(essentialDiv);
      });
    });
};
getEssentials();
