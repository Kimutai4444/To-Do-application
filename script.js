function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var newTask = '<li>';
    newTask += '<span>' + taskInput.value + '</span>';
    newTask += '<button onclick="editTask(this)">Edit</button>';
    newTask += '<button onclick="deleteTask(this)">Delete</button>';
    newTask += '</li>';

    taskList.innerHTML += newTask;
    taskInput.value = "";
}

function editTask(button) {
    var newTask = prompt("Edit task:", button.parentNode.firstChild.innerText);
    if (newTask !== null) {
        button.parentNode.firstChild.innerText = newTask;
    }
}

function deleteTask(button) {
    button.parentNode.remove();
}
