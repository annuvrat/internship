
const prompt = require('prompt-sync')();
    const currentUser = {
    id: 1,
    name: "annuvrat",
};


const projects = [
    { id: 1, title: "Project A", description: "Project A description", tasks: [{ id: 1, title: "Task 1" }] },
    { id: 2, title: "Project B", description: "Project B description", tasks: [{ id: 2, title: "Task 2" }] },
];


const projectList = document.getElementById("projectList");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const taskList = document.getElementById("taskList");
const createProjectBtn = document.getElementById("createProjectBtn");
const createTaskBtn = document.getElementById("createTaskBtn");
const logoutBtn = document.getElementById("logoutBtn");


function displayProjects() {
    projectList.innerHTML = "";
    projects.forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.textContent = project.title;
        projectItem.addEventListener("click", () => showProject(project));
        projectList.appendChild(projectItem);
    });
}


function showProject(project) {
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    taskList.innerHTML = "";
    project.tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
}


function logout() {
   
}


createProjectBtn.addEventListener("click", () => {
    const projectName = prompt("Enter project name:");
    if (projectName) {
        projects.push({ id: projects.length + 1, title: projectName, description: "Project description", tasks: [] });
        displayProjects();
    }
});

createTaskBtn.addEventListener("click", () => {
    const taskTitle = prompt("Enter task name:");
    if (taskTitle) {
        const currentProject = projects.find(project => project.title === projectTitle.textContent);
        if (currentProject) {
            currentProject.tasks.push({ id: currentProject.tasks.length + 1, title: taskTitle });
            showProject(currentProject);
        }
    }
});

logoutBtn.addEventListener("click", logout);

displayProjects();
