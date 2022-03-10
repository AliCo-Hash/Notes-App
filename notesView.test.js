/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel
    api = new NotesApi
    view = new NotesView(model, api)
  })

  it('displays 2 notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();
    
    expect(document.body.querySelectorAll('div.note').length).toBe(2);
  });

  it('adds notes', (done) => {
    const inputEl = document.body.querySelector('#note-input')
    inputEl.value = 'Note1'
    fetch.mockResponseOnce(JSON.stringify({
      note: 'Note1'
    }))
    const buttonEl = document.body.querySelector('#add-note-button')
    buttonEl.click();
    
    setTimeout(() => {
      try {
      expect(document.body.querySelectorAll('div.note').length).toBe(1);
      expect(document.body.querySelectorAll('div.note')[0].innerText).toEqual('Note1');
      done();
      } catch(error) {
        done(error);
      }
    })
  });

  it('clear previous notes before displaying', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})