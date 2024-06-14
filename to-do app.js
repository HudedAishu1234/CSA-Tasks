document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const li = document.createElement('li');
            li.innerText = todoText;

            // Mark as completed when clicked
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }

    // Add functionality to enter key
    todoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    window.addTodo = addTodo; // Make addTodo function available globally
});
