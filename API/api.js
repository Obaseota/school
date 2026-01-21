const cards = document.querySelector(".cards");

const getUsers = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.map(function (user) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("bg-gray-200", "rounded-2-1", "p-3")

        cardDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>@${user.username}</p>
        `;

        cards.appendChild(cardDiv);
      });
    });
};

getUsers();
