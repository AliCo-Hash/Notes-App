class NotesApi {
   loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(responce => responce.json())
    .then(data => {
      callback(data)
    });
   }

  createNote(note, callback) {
    
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: `${note}`})
    })
    .then(response => { 
      return response.json()
    })
    .then(data => {
      callback(data)
    });
  }
}

module.exports = NotesApi