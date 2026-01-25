const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

addBtn.addEventListener("click", function() {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "todo-item";
    li.textContent = taskText;

    const delBtn = document.createElement("span");
    delBtn.className = "delete-btn";
    delBtn.textContent = "×";
    li.appendChild(delBtn);

    todoList.appendChild(li);

    taskInput.value = "";
});