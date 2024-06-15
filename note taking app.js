const notesContainer = document.getElementById('notes-container');
const noteHeadingInput = document.getElementById('note-heading');
const noteDescriptionInput = document.getElementById('note-description');

document.addEventListener('DOMContentLoaded', displayNotes);

function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote() {
    const heading = noteHeadingInput.value.trim();
    const description = noteDescriptionInput.value.trim();

    if (heading && description) {
        const notes = getNotes();
        const newNote = {
            id: Date.now(),
            heading,
            description,
            completed: false
        };
        notes.push(newNote);
        saveNotes(notes);
        displayNotes();
        noteHeadingInput.value = '';
        noteDescriptionInput.value = '';
    }
}

function deleteNote(noteId) {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== noteId);
    saveNotes(notes);
    displayNotes();
}

function editNotePrompt(noteId) {
    const notes = getNotes();
    const note = notes.find(note => note.id === noteId);

    const newHeading = prompt("Enter new heading", note.heading);
    const newDescription = prompt("Enter new description", note.description);

    if (newHeading !== null && newDescription !== null) {
        note.heading = newHeading;
        note.description = newDescription;
        saveNotes(notes);
        displayNotes();
    }
}

function toggleComplete(noteId) {
    const notes = getNotes();
    const note = notes.find(note => note.id === noteId);
    note.completed = !note.completed;
    saveNotes(notes);
    displayNotes();
}

function displayNotes() {
    const notes = getNotes();
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = `note ${note.completed ? 'completed' : ''}`;
        noteElement.innerHTML = `
            <h2>
                <input type="checkbox" class="checkbox" ${note.completed ? 'checked' : ''} onclick="toggleComplete(${note.id})">
                ${note.heading}
            </h2>
            <p>${note.description}</p>
            <div class="actions">
                <button class="edit" onclick="editNotePrompt(${note.id})">Edit</button>
                <button onclick="deleteNote(${note.id})">Delete</button>
            </div>
        `;
        notesContainer.appendChild(noteElement);
    });
}
