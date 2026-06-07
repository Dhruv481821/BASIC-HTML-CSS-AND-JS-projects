const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
    
    if (input.value === "") {
        return;
    }
    
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const taskRow = document.createElement("div");

    const task = document.createElement("p");
    task.innerText = input.value;
    task.addEventListener("click", () => {
        task.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskRow.remove();
    });

    taskRow.classList.add("taskRow");

    taskRow.appendChild(task);
    taskRow.appendChild(deleteBtn);

    taskList.appendChild(taskRow);

    input.value = "";

});


function createTask(taskText) {
    const taskRow = document.createElement("div");

    const task = document.createElement("p");
    task.innerText = taskText;

    tasks.push(input.value);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

createTask(input.value);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

}