// Selectors
const todoInput = document.querySelector('.todoInput');
const addBtn =  document.querySelector('.addBtn');
const todoList = document.querySelector('.todoLists');
const footer = document.querySelector('.footer');

const alertPage = document.querySelector('.alertPage');
const cancelAlert = document.querySelector('.alertCancel');
const deleteAlert = document.querySelector('.alertDelete');

// Storing the selected Todo for deleting through alert.
let todo = '';

//hiding the alert
alertPage.style.display = "none";

// Footer text
footer.innerText = "Your Todo's will displayed here"


// Function to add new todo
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value
    const todo = document.createElement('div')
    const todoText = document.createElement('a');
    const todoDelete = document.createElement('button');
    todoText.innerText = todoValue;
    todoDelete.innerHTML = '<i class="fas fa-trash"></i>';
    todoDelete.classList.add('deleteTodo')
    todo.append(todoText, todoDelete);
    todo.classList.add('newTodo');
    const pos = todoList.firstElementChild;
    if(pos === null){
        todoList.append(todo);
    }else{
        todoList.insertBefore(todo, pos)
    }
    todoInput.value = '';   // Reseting the form
    changeFooter()          // function to change the footer.
}


// Delete Todo
const deleteTodo = (todo) => {
    todoList.removeChild(todo);
}

// Foorter text
const changeFooter = () => {
    footer.innerText = "Click on the Todo text to mark as Completed"
}

// Event Listeners
addBtn.addEventListener('click', addTodo)   // Add Todo

todoList.addEventListener('click', (e) => {
    let target = e.target.nodeName;
    if(target === 'A'){
        e.target.classList.add('checked')
    }
    if(target === 'I'){
        //Selected the Todo div of the clicked button
        let checkedTodo = e.target.parentNode.parentNode;
        todo = checkedTodo;

        // Checking if the todo is marked as completed
        let todoText = e.target.parentNode.parentNode.firstElementChild;
        if(todoText.classList.contains('checked')){
            deleteTodo(checkedTodo);
        }else{
            alertPage.style.display = "flex" 
        }
    }
})



cancelAlert.addEventListener('click', () => {
    alertPage.style.display = "none";
    todo = '';
})

deleteAlert.addEventListener('click', () => {
    deleteTodo(todo);
    todo = '';
    alertPage.style.display = "none" 
})


