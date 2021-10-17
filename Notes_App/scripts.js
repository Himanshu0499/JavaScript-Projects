const notes = [
    {
        title : 'Welcome',
        content : 'This is the JavaScript Notes App!  You can add your own Notes or check out the existing ones :)'
    },
    {
        title : 'Demo Note',
        content : 'This is the Demo Note'
    },

];

// array of note snapshot
const notesBtnArray = []
let noteIndex = '';

//all Containers
const noteContainer = document.querySelector('#note-container')
const newNoteGroup = document.querySelector('.btnGroup')

// Note controls
const newNoteBtn = document.querySelector('.newNote');

//Notes content
const noteTitle = document.querySelector('#title');
const noteContent = document.querySelector('#content');

//Notes tools
const saveNoteBtn = document.querySelector('#saveBtn');
const closeNoteBtn = document.querySelector('.closeNote');
const deleteNoteBtn = document.querySelector('.deleteNote');

// To hide or show the Note container
noteContainer.style.display = 'none';

;

// Function that creates Notes snapshot/icon
const onCreateIcon = (createdNote) => {
    // creating span, button, & label
    const iconGroup = document.createElement('span');
    const noteBtn = document.createElement('button');
    const noteLabel = document.createElement('label');
    noteBtn.innerHTML = '<i class="far fa-file-alt"></i>'       // adding icon from Font Awesome.
    iconGroup.classList.add('btnGroup')     
    noteBtn.classList.add('noteIcon')
    noteLabel.classList.add('noteLabel')
    noteLabel.innerText = createdNote.title;
    iconGroup.append(noteBtn, noteLabel)
    newNoteGroup.before(iconGroup);
    notesBtnArray.push(iconGroup);
}

// Method to create the existing/new notes snapshot/icons on screen to access them.
const createNotes = (savedNote) => {
    if(savedNote){
        // Following code will run if user saves a new Note
        onCreateIcon(savedNote);
    }else{
        notes.forEach((note)=> {
            onCreateIcon(note)
        })
    }
}


// Function to listen to open the Note form the icons/snapshot.
const onSelectNote = () => {
    notesBtnArray.forEach((btn, index) => {
        btn.addEventListener('click', ()=> {
            onOpenNote(index)  //Will open the existing note at certain index.
        })
    })
}



// CLOSING THE NOTE.
function onCloseNote() {
    noteContainer.style.display = 'none';
    noteIndex = '';
    noteTitle.value = '';
    noteContent.value = '';
}

// SAVING THE NOTE
const onSaveNote = ()=> {
    let title = noteTitle.value;
    let content = noteContent.value
    let newNote = { title, content}
    if(noteIndex >= 0){
        notes[noteIndex] = newNote
    }else{
        notes.push(newNote);
        createNotes(newNote);
    }
    noteContainer.style.display = 'none';
    onSelectNote();
}

// OPEN EXISTING OR NEW NOTE.
const onOpenNote = (selectedNoteIndex) => {
    /* If we have index, open the note at that index. 
       else open a new note. */
    if(selectedNoteIndex >= 0){
        noteIndex = selectedNoteIndex;
        let selectedNote = notes[selectedNoteIndex];
        noteTitle.value = selectedNote.title;
        noteContent.value = selectedNote.content;
        noteContainer.style.display = 'flex';
    }else{
        noteContainer.style.display = 'flex';
    } 
}

// DELETING THE NOTE
const onDeleteNote = () => {
    noteContainer.style.display = 'none';
    notes.splice(noteIndex, 1);
    notesBtnArray.forEach((btnGroup, index)=> {
        if(index === noteIndex){    
            btnGroup.remove()
        }
    })
    notesBtnArray.splice(noteIndex, 1);
}


//listening to button clicks
newNoteBtn.addEventListener('click', onOpenNote) // will open a new note.

deleteNoteBtn.addEventListener('click', onDeleteNote)
saveNoteBtn.addEventListener('click', onSaveNote);
closeNoteBtn.addEventListener('click', onCloseNote);

// Inital call To create the notes icon for the existing notes.
createNotes()   

//Initial call to add click listener to the existing note icons.
onSelectNote()

setTimeout(()=> {
    onOpenNote(0)
}, 500)