/*
Main idea of JavaScript:
    1.Save the data
    2.Generate the HTML
    3. Make it interactive
*/
let toDoList = []
let toDoDate = [];
let counter = 0;

function addTodo(){
    const inputElementTask = document.querySelector('.js-inputElementTask');
    const inputElementDate = document.querySelector('.js-inputElementDate');
    const name = inputElementTask.value;
    const date = inputElementDate.value || '';
    if(name) {
        toDoList.push(name);
        toDoDate.push(date);
        renderTodoList();
    }
    inputElementTask.value = '';
    inputElementDate.value = '';
}
function renderTodoList(){// show the toDoList
    let todoListHTML = '';
    for(let i = 0; i < toDoList.length; i++){
        const html=
            "<div class='container-task" + " js-container-task'>"+
            "<div class='js-task show-task'>" + toDoList[i] + "</div>"+
            "<div class='show-task-date'>" + toDoDate[i]  + "</div>"+
            "<button class='js-delete-task-button" +
            " delete-task-button'>Delete</button>"+ "</div>";
        todoListHTML += html;
    }
    document.querySelector('.tasks-container').innerHTML = todoListHTML;
}
function handleEnterInput(event){
    if(event.key === 'Enter')
        addTodo();
}
