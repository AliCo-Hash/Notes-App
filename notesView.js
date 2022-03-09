class NotesView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote);
    })
    
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(note => {
      note.remove();
    })
    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
    
    document.querySelector('#note-input').value = ''
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    
    this.displayNotes();
  }
}

module.exports = NotesView;