/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel
    view = new NotesView(model)
  })

  it('displays 2 notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();
    
    expect(document.body.querySelectorAll('.note').length).toBe(2);
  });

  it('adds notes', () => {
    const inputEl = document.querySelector('#note-input')
    inputEl.value = 'Note1'
    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click();
   
    expect(document.querySelectorAll('div.note').length).toBe(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Note1');
  });

  it('clear previous notes before displaying', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})