const NotesModel = require('./notesModel')

describe('NotesModel', () => {

  it('getNotes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('addNote', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  })

  it('rest', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})