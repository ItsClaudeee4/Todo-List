const newInput = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const lists = document.getElementById("lists");
const warning = document.getElementById("warning");
const list = document.getElementById("list");

function getTask() {
  const task = newInput.value;

  if (task === "") {
    warning.classList.remove("hidden");
  } else {
    const taskPara = document.createElement("p");
    const list = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const deleteBtn = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-x");
    taskPara.innerHTML = task;
    lists.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(taskPara);
    list.appendChild(deleteBtn);
    deleteBtn.appendChild(icon);
    warning.classList.add("hidden");

    deleteBtn.addEventListener("click", () => {
      lists.removeChild(list);
    });

    checkbox.addEventListener("click", () => {
      taskPara.classList.toggle("line");
    });
  }

  newInput.value = "";
}
