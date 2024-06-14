document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});

let todos = [];

function addTodo() {
    const todoInput = document.getElementById('newTodo');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo');
        return;
    }

    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    renderTodos();

    todoInput.value = '';
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.className = todo.completed ? 'completed' : '';
        li.setAttribute('data-id', todo.id);

        const completeButton = document.createElement('button');
        completeButton.textContent = todo.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => toggleComplete(todo.id);

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateTodoPrompt(todo.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo.id);

        li.appendChild(completeButton);
        li.appendChild(updateButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function updateTodoPrompt(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        const newText = prompt('Update the todo text:', todo.text);
        if (newText !== null) {
            todo.text = newText.trim();
            saveTodos();
            renderTodos();
        }
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
    renderTodos();
}

function showDate() {
    const dateDisplay = document.getElementById('dateDisplay');
    const currentDate = new Date();
    dateDisplay.textContent = currentDate.toString();
}
