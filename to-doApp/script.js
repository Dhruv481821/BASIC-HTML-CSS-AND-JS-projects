const input = document.querySelector("input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    if (input.value === "") {
        return;
    }

    const taskRow = document.createElement("div");

    const task = document.createElement("p");
    task.innerText = input.value;

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