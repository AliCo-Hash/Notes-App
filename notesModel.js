class NotesModel {
  constructor() {
    this.notes = []
  }
  getNotes() {
    return this.notes 
  }

  addNote(note) {
    this.notes.push(note)
  }

  reset() {
    return this.notes = []
  }

  setNotes(data) {
    this.notes = data
  }

}

module.exports = NotesModel