// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Misc Variables
let toDoCard = $('#todo-cards')
let inProgressCard = $('#in-progress-cards')
let doneCard = $('#done-cards')

// TODO: create a function to generate a unique task id
function generateTaskId() {
    localStorage.setItem('nextId', JSON.stringify(nextId + 1));
    return nextId++;
}

// TODO: create a function to create a task card
function createTaskCard(task) {
}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {
    toDoCard.empty();
    inProgressCard.empty();
    doneCard.empty();
    taskList.forEach(task => {
        let taskCard = $('<div>');
        taskCard.addClass("draggable task-card border border-dark m-4");
        taskCard.attr("data-task-id",task.taskId);
        let taskTitle = $('<h1>').text(task.taskTitle);
        let taskDueDate = $('<h5>').text(task.taskDueDate);
        let taskDescription = $('<h3>').text(task.taskDescription);
        let taskDelete = $('<button>').text('delete').attr("data-task-id",task.taskId);
        taskDelete.on('click',handleDeleteTask);
        taskCard.append(taskTitle, taskDueDate, taskDescription, taskDelete)
        if (task.taskStatus === "to-do") {
            toDoCard.append(taskCard)
        }
        else if (task.taskStatus === "in-progress") {
            inProgressCard.append(taskCard)
        }
        else if (task.taskStatus === "done") {
            doneCard.append(taskCard)
        }
        $(".draggable").draggable({zIndex: 100});
    })
}


// TODO: create a function to handle adding a new task
function handleAddTask(event){
 let taskTitle = $("#taskTitle").val();
 let taskDueDate = $("#taskDueDate").val();
 let taskDescription = $("#taskDescription").val();
 let taskObject = {
    taskId:generateTaskId(),
    taskTitle:taskTitle, 
    taskDueDate:taskDueDate, 
    taskDescription:taskDescription,
    taskStatus: "to-do"
 }
 taskList.push(taskObject);
 console.log(taskObject);
 localStorage.setItem('tasks', JSON.stringify(taskList));
 $("#taskTitle").val("");
 $("#taskDueDate").val("");
 $("#taskDescription").val("");
 $("#formModal").modal('hide');

 renderTaskList();
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event){
    event.preventDefault();
    const taskId = $(this).attr("data-task-id");
    taskList = taskList.filter(task => task.taskId !== parseInt(taskId))
    localStorage.setItem('tasks', JSON.stringify(taskList));

renderTaskList();
}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
let currentTaskId = ui.draggable[0].dataset.taskId
let currentTaskStatus = event.target.id
for (let index = 0; index < taskList.length; index++) {
    const element = taskList[index];
    if (element.taskId === parseInt(currentTaskId)) {
        element.taskStatus = currentTaskStatus
    }
}
localStorage.setItem('tasks', JSON.stringify(taskList));

renderTaskList();
}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();
 $("#addTask").on("click",handleAddTask)
 $(".lane").droppable({
    accept:".draggable",
    drop: handleDrop
  });
});

