// // console.log(document.getElementsByTagName("h1"));
// // console.log(document.getElementsByClassName("demo"));
// // console.log(document.getElementById("yes"));

// const para = document.getElementById("yes");
// const btn = document.getElementById("btn");

// console.log(para);
// console.log(btn);

// btn.addEventListener("click", function (){
//     para.textContent = "Them go Pack your Teeth";
//     para.style.color = "red";
// });

const inputAmount = document.getElementById("amount");
const checkBalance = document.getElementById("check");
const depositAmount = document.getElementById("deposit");
const withdrawAmount = document.getElementById("withdraw");
const status = document.getElementById("status");
const balance = document.getElementById("balance");

checkBalance.addEventListener("click", function () {
  status.textContent = `Your balance is $${balance.innerText}`;
  setTimeout(function () {
    status.textContent = ``;
  }, 2000);
});

depositAmount.addEventListener("click", function () {
  if (inputAmount.value == "") {
    status.textContent = "Please input an Amount";
    status.style.color = "red";
    inputAmount.value = "";
    setTimeout(function () {
      status.textContent = ``;
    }, 2000);
    return;
  }
  balance.innerText = Number(balance.innerText) + Number(inputAmount.value);
  inputAmount.value = "";
  status.textContent = `Your balance is $${balance.innerText}`;
  status.style.color = "green";
  setTimeout(function () {
    status.textContent = ``;
  }, 2000);
});

withdrawAmount.addEventListener("click", function () {
  if (inputAmount.value == "") {
    status.textContent = "Please input an Amount";
    status.style.color = "red";
    inputAmount.value = "";
    setTimeout(function () {
      status.textContent = ``;
    }, 2000);
    return;
  } else if (inputAmount.value > balance.textContent) {
    status.textContent = "Insufficient Funds";
    status.style.color = "red";
    inputAmount.value = "";
    setTimeout(function () {
      status.textContent = ``;
    }, 2000);
    return;
  }
  balance.innerText = Number(balance.innerText) - Number(inputAmount.value);
  inputAmount.value = "";
  status.textContent = `Your balance is $${balance.innerText}`;
  setTimeout(function () {
    status.textContent = ``;
  }, 2000);
});
