const input = document.querySelector('.task-input');
const button = document.querySelector('.input-button');
const list =document.querySelector('.check-list');

button.addEventListener('click',addtask);
list.addEventListener('click',completetask);

function addtask(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('tasks');

    const addList = document.createElement('li');
    addList.innerText = input.value;
    addList.classList.add('add-task');
    listDiv.appendChild(addList);

    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = '<i class="fa-solid fa-check fa-2x" style="color: #00ff00;"></i>';
    buttonAdd.classList.add('add-btn');
    listDiv.appendChild(buttonAdd);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = '<i class="fa-solid fa-xmark fa-2x" style="color: #ff0000;"></i>';
    buttonRemove.classList.add('remove-btn');
    listDiv.appendChild(buttonRemove);

    list.appendChild(listDiv);
}

function completetask(e){
    if(e.target.classList.contains('fa-xmark')){
        e.target.closest('.tasks').remove();
    }
    if(e.target.classList.contains('fa-check')){
        e.target.closest('.tasks').classList.add('taskcheck');
    }
}
