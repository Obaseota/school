document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const categorySelect = document.getElementById("categorySelect");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");
  const errorMessage = document.getElementById("errorMessage");

  let tasks = [];

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    taskInput.classList.add("error");

    setTimeout(() => {
      errorMessage.style.display = "none";
      taskInput.classList.remove("error");
    }, 3000);
  }

  function updateTaskCount() {
    const existingCount = document.querySelector(".task-count");
    if (existingCount) {
      existingCount.remove();
    }

    if (tasks.length > 0) {
      const countElement = document.createElement("div");
      countElement.className = "task-count";
      countElement.textContent = `You have ${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
      taskList.parentNode.insertBefore(countElement, taskList.nextSibling);
    }
  }

  function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
      taskList.innerHTML =
        '<div class="empty-message">No tasks yet. Add your first task!</div>';
      updateTaskCount();
      return;
    }

    tasks.forEach(function (task, index) {
      const taskElement = document.createElement("div");
      taskElement.className = `task-item ${task.category}`;

      taskElement.innerHTML = `
                <div class="task-content">
                    <span>${task.text}</span>
                    <span class="category-tag">${task.category}</span>
                </div>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

      taskList.appendChild(taskElement);
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        tasks.splice(index, 1);
        displayTasks();
      });
    });

    updateTaskCount();
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    const taskCategory = categorySelect.value;

    if (taskText === "") {
      showError("Please enter a task!");
      return;
    }

    if (taskText.length < 3) {
      showError("Task must be at least 3 characters long!");
      return;
    }

    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    tasks.push(newTask);
    taskInput.value = "";
    taskInput.focus();
    displayTasks();
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function initializeEventListeners() {
    addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", handleKeyPress);

    taskInput.addEventListener("focus", function () {
      errorMessage.style.display = "none";
      taskInput.classList.remove("error");
    });
  }

  initializeEventListeners();
  displayTasks();
});
