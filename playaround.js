this.api.createNote(newNote, (data) => {
      this.model.setNotes(data);

      this.displayNotes();
})

//is this because createNote is a fetch so fetch has to be required?