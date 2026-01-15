const inputName = document.getElementById("name");
const inputNum1 = document.getElementById("mathscore");
const inputNum2 = document.getElementById("engscore");
const inputNum3 = document.getElementById("sciscore");
const status = document.getElementById("status");
const average = document.getElementById("average");
const submit = document.getElementById("submit");
const board = document.getElementById("board");
const skill = document.getElementById("skill");
const boost = document.getElementById("boost");
const daniel = document.getElementById("dani");

submit.addEventListener("click", function () {
  board.textContent = `${inputName.value} `;
  skill.textContent = `${inputNum1.value}`;
  boost.textContent = `${inputNum2.value}`;
  dani.textContent = `${inputNum3.value}`;
  inputName.value = "";
  inputNum1.value = "";
  inputNum2.value = "";
  inputNum3.value = "";
  setTimeout(function () {
    status.textContent = ``;
  }, 2000);
});

average.addEventListener("click", function () {
  const num1 = parseFloat(inputNum1.value) || 0;
  const num2 = parseFloat(inputNum2.value) || 0;
  const num3 = parseFloat(inputNum3.value) || 0;

  const avg = (num1 + num2 + num3) / 3;
  status.textContent = `Your Average = ${avg.toFixed(2)}`;
});
