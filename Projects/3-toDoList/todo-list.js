/*
Main idea of JavaScript:
    1.Save the data
    2.Generate the HTML
    3. Make it interactive
*/
let toDoList = JSON.parse(localStorage.getItem('todo')) || [];
renderTodoList();

function addTodo(){
    const inputElementTask = document.querySelector('.js-inputElementTask');
    const inputElementDate = document.querySelector('.js-inputElementDate');
    const name = inputElementTask.value;
    const dueDate = inputElementDate.value || '';
    if(name) {
        toDoList.push({name, dueDate});
        renderTodoList();
    }
    inputElementTask.value = '';
    inputElementDate.value = '';
}
function renderTodoList(){// show the toDoList
    let todoListHTML = '';
    for(let i = 0; i < toDoList.length; i++){
        const html=`
            <div class='container-task js-container-task'>
            <div class='js-task show-task'>${toDoList[i].name}</div>
            <div class='show-task-date'>${toDoList[i].dueDate}</div>
            <button onclick='toDoList.splice(${i},1);renderTodoList();' class='js-delete-task-button delete-task-button'>Delete</button>
            </div>`;
        todoListHTML += html;
    }
    document.querySelector('.tasks-container').innerHTML = todoListHTML;
    localStorage.setItem('todo',JSON.stringify(toDoList));
}
function handleEnterInput(event){
    if(event.key === 'Enter')
        addTodo();
}
