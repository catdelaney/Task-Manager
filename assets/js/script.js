// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// TODO: create a function to generate a unique task id
function generateTaskId() {

}

// TODO: create a function to create a task card
function createTaskCard(task) {

}

// TODO: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// TODO: create a function to handle adding a new task
function handleAddTask(event){
 let taskTitle = $("#taskTitle").val();
 let taskDueDate = $("#taskDueDate").val();
 let taskDescription = $("#taskDescription").val();
 let taskObject = {
    taskTitle:taskTitle, 
    taskDueDate:taskDueDate, 
    taskDescription:taskDescription,
    status: "To Do"
 }
 console.log(taskObject)
}

// TODO: create a function to handle deleting a task
function handleDeleteTask(event){

}

// TODO: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// TODO: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
 $("#addTask").on("click",handleAddTask)
});
