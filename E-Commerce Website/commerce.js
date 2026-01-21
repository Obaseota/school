const products = document.querySelector(".products");

const getProducts = function () {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.map(function (product) {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `

        <img src=${product.images[0]} class="h-[100px]>
        <h3>${product.title}</h3>
        
        `;

        products.appendChild(productDiv);
      });
    });
};

getProducts();
