
const taskInput = document.querySelector("#taskInput");
const addbtn = document.querySelector("#addbutton");
const taskList = document.querySelector("#taskList");

let tasks = [];

const x=document.getElementById("addbtn");

x.addEventListener("mouseover",function(){
    x.innerText="mouse";
});



addbtn.addEventListener("click", function() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("No text has been entered!!!");
        return;
    }

    const taskObj = {
        id: Date.now(),
        text: text
    };

    tasks.push(taskObj);

    createTaskElement(taskObj);

    taskInput.value = "";   
});

function createTaskElement(task) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");

    removeBtn.addEventListener("click", function() {

        tasks = tasks.filter(function(t) {
            return t.id !== task.id;
        });

        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}







