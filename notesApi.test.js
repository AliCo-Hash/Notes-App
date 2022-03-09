const NotesApi = require('./notesApi')

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Note1'
    }))

    api.loadNotes(notes => {
      expect(notes.note).toBe('Note1')
    })
  })

  it('calls fetch and posts a notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Note1'
    }));

    api.createNote('Note1', (notes) => {
      expect(notes.note).toBe('Note1');
    });
  })
})