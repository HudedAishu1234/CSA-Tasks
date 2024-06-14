document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const inputValue = document.getElementById('inputValue');
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');

    function updateCounterDisplay() {
        counterDisplay.textContent = counter;
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    addButton.addEventListener('click', () => {
        const value = parseInt(inputValue.value) || 0;
        counter += value;
        updateCounterDisplay();
        changeBackgroundColor();
    });

    subtractButton.addEventListener('click', () => {
        const value = parseInt(inputValue.value) || 0;
        counter -= value;
        updateCounterDisplay();
        changeBackgroundColor();
    });
});
