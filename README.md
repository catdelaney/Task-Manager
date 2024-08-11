# Task Manager

## Description
This task management application enables users to efficiently track and manage tasks through an interactive task board. Users can add, modify, and delete tasks while tracking their progress across columns labeled To Do, In Progress, and Done. Tasks are color-coded to highlight approaching deadlines and overdue items. Users can drag tasks between columns to update their progress and local storage ensures that tasks are retained across sessions, providing a user-friendly experience for organizing and monitoring task progress.

## Screenshots
![Task Manager](./assets/images/task%20manager.png)

## User Story
AS A project team member with multiple tasks to organize
I WANT a task board 
SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly

## Acceptance Criteria
GIVEN a task board to manage a project
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist

## Links
Deployed Link: https://catdelaney.github.io/Task-Manager/

GitHub Repo: https://github.com/catdelaney/Task-Manager